import type { Handler } from "express"
import jwt from "jsonwebtoken"
export const authMiddleware: Handler = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'unauthorized',
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded as { id: string, username: string, role: string }
    req.app
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'unauthorized',
    })
  }

  next()
}