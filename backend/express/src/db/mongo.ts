import mongoose from 'mongoose'

mongoose
	.connect('mongodb://127.0.0.1:27017', {
		pass: 'yuling',
		user: 'root',
	})
	.then(() => {
		console.log('mongo has connected')
	})
	.catch((err) => {
		console.error('Something get error: ', err)
	})

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	isActive: Boolean,
	tags: [String],
	createAt: {
		type: Date,
		default: Date.now,
	},
})
const User = mongoose.model('User', userSchema)

// async function runQueryExample() {
// 	try {
// 		// 创建一个文档
// 		// const newUser = await User.create({
// 		// 	name: 'yuling',
// 		// 	email: 'sakuriget@gmail.com',
// 		// 	age: 24,
// 		// 	isActive: true,
// 		// 	tags: ['frontend', 'developer'],
// 		// })
//     const allUsers = await User.find({})
// 		console.log(allUsers)
// 	} catch (err) {
// 		console.log('Error: ', err)
// 	} finally {
// 		await mongoose.connection.close()
//     console.log("已关闭")
// 	}
// }
// runQueryExample()

