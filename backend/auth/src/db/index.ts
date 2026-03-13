import mongoose from 'mongoose'
const { MONGO_URL, MONGO_PSW, MONGO_USER } = process.env
console.log("process.env", MONGO_URL, MONGO_PSW, MONGO_USER)

export const connectToDB = async () => {
	try {
		await mongoose.connect(MONGO_URL, {
			pass: MONGO_PSW,
			user: MONGO_USER,
		})
		console.log('mongodb is connected successfully')
	} catch (error) {
		console.log('Error -> ', error)
		process.exit(1)
	}
}

