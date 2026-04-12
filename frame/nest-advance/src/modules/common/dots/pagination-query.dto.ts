import { IsNumber } from 'class-validator'

export class PaginationQuertDto {
  @IsNumber()
  page: number
  @IsNumber()
  limit: number
}
