import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dtos/login.dto'
import { RegisterDto } from './dtos/register.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  @HttpCode(HttpStatus.CREATED)
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto)
  }
  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto)
  }
  @Post('create-admin')
  async createAdmin() {
    return await this.authService.createAdmin()
  }
  @Post('refreshToken')
  async refreshToken(@Body() refreshToken: string) {
    return await this.authService.refreshToken(refreshToken)
  }
}
