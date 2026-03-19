import type { Handler } from "express";
import { ProductModel, type Product } from "../models/product.js";

export const insertProducts: Handler = async (req, res) => {
  try {
    // some mock data
    const products: Product[] = [
      {
        name: '衣服',
        category: '衣服',
        price: 100,
        isStock: true,
        tags: ['衣服', '外套', '男女通用']
      },
      {
        name: '裤子',
        category: '裤子',
        price: 100,
        isStock: true,
        tags: ['裤子', '男女通用']
      },
      {
        name: '帽子',
        category: '帽子',
        price: 100,
        isStock: true,
        tags: ['帽子', '男女通用']
      },
      {
        name: '鞋子',
        category: '鞋子',
        price: 90,
        isStock: true,
        tags: ['鞋子', '男女通用']
      },
      {
        name: '袜子',
        category: '袜子',
        price: 20,
        isStock: false,
        tags: ['袜子', '男女通用']
      }
    ]
    const result = ProductModel.insertMany(products)
    res.status(201).json({
      success: true,
      message: 'products inserted successfully',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}

export const getAllProducts: Handler = async (req, res) => {
  try {
    const products = await ProductModel.find({})
    res.status(200).json({
      success: true,
      message: 'products fetched successfully',
      data: products
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}

export const getProductStats: Handler = async (req, res) => {
  try {
    const result = await ProductModel.aggregate([
      {
        $match: {
          isStock: true,
          price: {
            $gte: 100
          },
        }
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$price"
          },
          averagePrice: {
            $avg: "$price"
          },
          maxPrice: {
            $max: "$price"
          }
        }
      }
    ])
    res.status(200).json({
      success: true,
      message: 'products fetched successfully',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'something went wrong! Please try again',
    })
  }
}