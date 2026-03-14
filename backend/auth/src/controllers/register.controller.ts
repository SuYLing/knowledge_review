import bcrypt from "bcryptjs";
import type { Handler } from "express";
import { UserModel } from "../models/user.js";
const isExists = async (email: string, username: string) => {
  try {
    const user = await UserModel.findOne({
      $or: [{ email }, { username }]
    })
    return !!user
  } catch (error) {
    throw error
  }
}

export const registerUser: Handler = async (req, res) => {
  try {
    const { username, email, password, role } = req.body
    // check if user already exists
    if (await isExists(email, username)) {
      res.status(409).json({
        success: false,
        message: 'user already exists',
      })
    } else {
      // hash password
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)
      // create user
      const newUser = await UserModel.create({
        username,
        email,
        password: hashPassword,
        role: role || 'user'
      })
      if (newUser) {
        res.status(201).json({
          success: true,
          message: 'user created successfully',
        })
      } else {
        res.status(500).json({
          success: false,
          message: 'something went wrong! Please try again',
        })
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}