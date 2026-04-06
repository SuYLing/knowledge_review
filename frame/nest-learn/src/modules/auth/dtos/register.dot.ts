import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class RegisterDto {
  @IsEmail(
    {},
    {
      message: '请输入正确的邮箱地址',
    },
  )
  @IsNotEmpty()
  email: string

  @Length(6, 18, {
    message: '密码长度最小六位, 最长18位',
  })
  @IsNotEmpty()
  password: string
}
