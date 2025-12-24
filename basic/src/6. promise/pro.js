const PENDING_STATE = 'pending'
const FULFILLED_STATE = 'fulfilled'
const REJECTED_STATE = 'rejected'


class MPromise {
	value = void 0
	onFulfilledCallbacks = []
	onRejectedCallbacks = []
	state = PENDING_STATE
	constructor(executor) {
		setTimeout(() => {
			console.log(this)
			executor(this.resolve.bind(this), this.reject.bind(this))
		})
	}
	resolve(value) {
		if (this.state !== PENDING_STATE) return

		// 变更状态，设置值，执行函数
		this.value = value
		this.state = FULFILLED_STATE
		for (const cb of this.onFulfilledCallbacks) {
			cb(this.value)
		}
	}
	reject(reason) {
		if (this.state !== PENDING_STATE) return
		// 变更状态，设置值，执行函数
		this.value = reason
		this.state = REJECTED_STATE
		for (const cb of this.onRejectedCallbacks) {
			cb(this.value)
		}
		throw new Error(reason)
	}
	then(onFulfilled, onRejected) {
		if (onFulfilled) this.onFulfilledCallbacks.push(onFulfilled)
		if (onRejected) this.onRejectedCallbacks.push(onRejected)
	}
}

const mp = new MPromise((resolve, reject) => {
	resolve("1111")
})
mp.then(res => console.log("dadada", res), res => console.log("error", res))