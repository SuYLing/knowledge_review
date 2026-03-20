import type { Handler } from "express";

export const createAuthor:Handler = async (req,res)=>{
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}