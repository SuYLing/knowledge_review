import type { Handler } from 'express'

export const RouterLogger: Handler = (req, res, next) => {
  const { method, url } = req
  console.log(`Method ${method.toLocaleUpperCase()}  Path: ${url}`)
  next()
}
