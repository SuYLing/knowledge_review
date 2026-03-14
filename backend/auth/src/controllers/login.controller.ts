import bcrypt from "bcryptjs";
import type { Handler } from "express";
import { UserModel } from "../models/user.js";


export const loginUser: Handler = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const userInfo = await UserModel.findOne({ $and: [{ username }, { email }] })
    if (!userInfo) {
      res.status(404).json({
        success: false,
        message: 'user not found',
      })
      return
    }
    const isMatch = await bcrypt.compare(password, userInfo.password)

    if (isMatch) {
      res.status(200).json({
        success: true,
        message: 'user logged in successfully',
      })
    } else {
      res.status(401).json({
        success: false,
        message: 'invalid credentials',
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