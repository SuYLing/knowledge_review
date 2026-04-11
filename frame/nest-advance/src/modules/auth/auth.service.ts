import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import bcrypt from 'bcryptjs'
import type { Repository } from 'typeorm'
import type { LoginDto } from './dtos/login.dto'
import type { RegisterDto } from './dtos/register.dto'
import { User } from './entities/user.entity'
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
    const hashedPassword = await bcrypt.hash(user.password, 10)

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
    const accessToken = this.jwtService.sign({
      sub: savedUser.id,
      email: savedUser.email,
    })
    return {
      accessToken,
      ...savedUser,
    }
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
    const isMatchedPassword = await bcrypt.compare(password, savedPassword)
    if (!isMatchedPassword) {
      throw new UnauthorizedException('用户密码错误')
    }
    return userInfo
  }
}
