import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcryptjs'
import { PrismaService } from '../../shared/prisma/prisma.service'
import { LoginDto } from './dtos/login.dto'
import { RegisterDto } from './dtos/register.dot'
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerDto: RegisterDto) {
    const { password, email } = registerDto
    if (await this.isUserExist(email)) {
      throw new ConflictException('用户已存在，请登陆', {})
    }
    // 对密码做hash处理
    const hashedPassword = await bcrypt.hash(password, 10)
    const { password: _, ...rest } = await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })
    return rest
  }
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto

    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    })
    if (!user) {
      // 用户不存在
      throw new NotFoundException('用户不存在，请先注册')
    }
    const { password: _, ...rest } = user
    const isMatchedPassword = await bcrypt.compare(password, user.password)
    if (!isMatchedPassword) {
      // 密码错误
      throw new UnauthorizedException('用户密码错误')
    }
    const token = await this.jwtService.signAsync({
      userId: user.id,
      email: user.email,
    })
    return {
      ...rest,
      access_token: token,
    }
  }
  private async isUserExist(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    })
    return !!user
  }
}
