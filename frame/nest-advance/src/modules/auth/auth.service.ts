import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService, type JwtSignOptions } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import bcrypt from 'bcryptjs'
import type { Repository } from 'typeorm'
import type { LoginDto } from './dtos/login.dto'
import type { RegisterDto } from './dtos/register.dto'
import { User, UserRole } from './entities/user.entity'
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: RegisterDto) {
    const isUserExisted = await this.isUserExisted(user.email)
    if (isUserExisted) {
      throw new ConflictException('用户已存在')
    }
    const hashedPassword = await this.hasdedPassword(user.password)

    const newlyUser = this.userRepository.create({
      ...user,
      password: hashedPassword,
    })
    const { password: _, ...createdUser } =
      await this.userRepository.save(newlyUser)
    return createdUser
  }

  async login(user: LoginDto) {
    const savedUser = await this.validateUser(user.email, user.password)
    return {
      accessToken: await this.generateAccessToken(savedUser),
      refreshToken: await this.generateRefreshToken(savedUser),
      ...savedUser,
    }
  }

  async createAdmin() {
    const adminUser = this.userRepository.create({
      role: UserRole.ADMIN,
      name: 'supreAdmin',
      email: 'admin@gmail.com',
      password: await this.hasdedPassword('12345678'),
    })
    return await this.userRepository.save(adminUser)
  }

  async refreshToken(refreshToken: string) {
    // 验证这个刷新token
    const payload = await this.jwtService.verifyAsync<{ sub: number }>(
      refreshToken,
    )
    const user = await this.userRepository.findOneBy({ id: payload.sub })
    if (!user) throw new NotFoundException('错误的token')
    return {
      accessToken: this.generateAccessToken(user),
      refreshToken: this.generateRefreshToken(user),
    }
  }

  // 辅助函数
  private async verifyPassword(password: string, hasdedPassword: string) {
    return await bcrypt.compare(password, hasdedPassword)
  }
  private async hasdedPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }
  async isUserExisted(email: string) {
    const savedUser = await this.userRepository.findOneBy({ email })
    return savedUser ? savedUser : false
  }

  async validateUser(email: string, password: string) {
    const savedUser = await this.isUserExisted(email)
    if (!savedUser) {
      throw new NotFoundException('用户不存在')
    }
    const { password: savedPassword, ...userInfo } = savedUser
    const isMatchedPassword = await this.verifyPassword(password, savedPassword)
    if (!isMatchedPassword) {
      throw new UnauthorizedException('用户密码错误')
    }
    return userInfo
  }
  // 生成 访问token，有效时间短
  private async generateAccessToken(user: Omit<User, 'password'>) {
    return await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    })
  }
  // 生成 刷新 token，有效时间长
  private async generateRefreshToken(user: Omit<User, 'password'>) {
    return await this.jwtService.signAsync(
      {
        sub: user.id,
      },
      {
        expiresIn: '7d',
      } satisfies JwtSignOptions,
    )
  }
}
