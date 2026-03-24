import type { Handler } from "express";

export const requestLogger: Handler = (req, res, next) => {
  const timestamp = new Date().toISOString()
  req.timestamp = timestamp
  const { method, url } = req
  const userAgent = req.get("User-Agent")
  console.log(`${timestamp}: ${userAgent} - ${method} - ${url}`)
  next()
}