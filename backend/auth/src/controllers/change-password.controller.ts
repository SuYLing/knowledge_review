import bcrypt from "bcryptjs"
import type { Handler } from "express"
import { UserModel } from "../models/user.js"

export const changePassword: Handler = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'unauthorized',
      })
    }
    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'user not found',
      })
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password)
    if (isMatch) {
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(newPassword, salt)
      user.password = hashPassword
      await user.save()
      res.status(200).json({
        success: true,
        message: 'password changed successfully',
      })
    } else {
      res.status(401).json({
        success: false,
        message: 'invalid old password',
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
} 