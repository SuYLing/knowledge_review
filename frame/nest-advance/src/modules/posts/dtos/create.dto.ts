import { IsNotEmpty, Length } from 'class-validator'

export class CreatePostDto {
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  @Length(15, 500, {
    message: '内容长度必须在15 ～ 500',
  })
  content: string

  @IsNotEmpty()
  @Length(3, 8, {
    message: '作者名长度必须在15 ～ 500',
  })
  authorName: string
}
