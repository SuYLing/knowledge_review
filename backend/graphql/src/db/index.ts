import mongoose from 'mongoose';


export const connectToDB = async () => {
  try {
    const { MONGO_URL, MONGO_PSW, MONGO_USER } = process.env
    await mongoose.connect(MONGO_URL, {
      user: MONGO_USER,
      pass: MONGO_PSW
    })
    console.log('mongodb is connected successfully')

  } catch (error) {
    console.log('Error -> ', error)
    process.exit(1)
  }
}