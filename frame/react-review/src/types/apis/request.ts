export namespace Response {
  export interface SuccessRespose<T> {
    success: boolean
    message: string
    data: T
  }
}

