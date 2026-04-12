export interface PaginationMeta {
  /** 总记录数 */
  total: number

  /** 总页数 */
  totalPage: number

  /** 当前页码（从 1 开始） */
  page: number

  /** 每页条数 */
  pageSize: number

  /** 是否有下一页 */
  hasNextPage: boolean

  /** 是否有上一页 */
  hasPrevPage: boolean

  /** 下一页页码（可选） */
  nextPage?: number

  /** 上一页页码（可选） */
  prevPage?: number
}

export interface ResposeWithPainationMate<T> {
  pagination: PaginationMeta
  data: T[]
}
