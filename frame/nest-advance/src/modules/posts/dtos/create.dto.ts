import { IsNotEmpty, Length } from 'class-validator'
import type { User } from 'src/modules/auth/entities/user.entity'

export class CreatePostDto {
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  @Length(4, 500, {
    message: '内容长度必须在15 ～ 500',
  })
  content: string

  @IsNotEmpty()
  author: User
}
