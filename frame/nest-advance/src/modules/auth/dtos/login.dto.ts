import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator'

export class LoginDto {
  @IsNotEmpty({ message: '邮箱地址不能为空' })
  @IsEmail(
    {},
    {
      message: '请输入正确邮箱地址',
    },
  )
  email: string
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6, 18, {
    message: '密码长度需要大于6位，小于18位',
  })
  password: string
  @IsOptional()
  @Length(3, 6, {
    message: '用户名长度需要大于6位，小于18位',
  })
  name?: string
}
