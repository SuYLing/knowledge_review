import { IsOptional } from 'class-validator'
import { PaginationQuertDto } from 'src/modules/common/dots/pagination-query.dto'

export class FindPostsQueryDto extends PaginationQuertDto {
  @IsOptional()
  title?: string
}
