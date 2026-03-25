import type { ErrorRequestHandler, Handler } from "express"

export class APIError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.name = "APIError"
    this.status = status
  }
}
export const asyncHandler: (fn: Handler) => Handler = (fn: Handler) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}
export const globalErrorHandler: ErrorRequestHandler = (err: APIError | Error, req, res, next) => {
  console.error(err.stack)
  if (err instanceof APIError) {
    return res.status(err.status).json({
      status: "error",
      message: err.message
    })
  }
  return res.status(500).json({
    status: "error",
    message: "An unexpected error occured"
  })
}

