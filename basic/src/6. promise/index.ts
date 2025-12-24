type FN = (...args: unknown[]) => void
const pr = {
	then(onFulfilled: FN, onRejected: FN) {
		setTimeout(() => {
			onFulfilled('success 1')
		}, 1000)
	},
}

const prfn = () => {}
prfn.then = async (onFulfilled: FN, onRejected: FN) => {
	onFulfilled('success 2')
}

async function test() {
	console.log('start')
	const res = await pr
	const res2 = await prfn
	const res3 = await res2
	// console.log(res)
	console.log(res2)
	console.log(res3)
	console.log('end')
}
test()

export * from './pro.js'

