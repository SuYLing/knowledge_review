/**
 * promise:
Promise 的实现核心就是五个点：状态管理、结果保存、回调队列、链式调用、异步调度。
首先维护 pending / fulfilled / rejected 三种状态以及 value 和 reason；resolve 和 reject 负责修改状态、保存结果并触发回调。
then 根据当前状态决定立即执行还是把回调放入队列等待异步完成。
为了支持链式调用，then 必须返回一个新的 Promise，并根据回调的返回值决定直接 resolve，还是等待返回的 Promise 完成。
最后，所有 then 回调都通过微任务（queueMicrotask）执行，以符合 Promise 规范。
 *
 *
 *
 * **/
/*
*                new MyPromise(executor)
                        │
                        ▼
             constructor 立即执行 executor
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
    resolve(value)                reject(reason)
         │                             │
         ▼                             ▼
 state = fulfilled             state = rejected
 value = value                 reason = reason
         │                             │
         ▼                             ▼
 queueMicrotask()              queueMicrotask()
         │                             │
         ▼                             ▼
 执行 fulfilledCallbacks      执行 rejectedCallbacks
         ▲                             ▲
         │                             │
         └────────── then() 注册回调 ───┘
                        │
                        ▼
               返回一个新的 Promise
                        │
                        ▼
             处理 return 普通值 / Promise
*/

new Promise((res, rej) => {})

type State = 'pending' | 'fulfilled' | 'rejected'

type Executor<T> = (
	resolve: (value: T) => void,
	reject: (reason: any) => void,
) => void

//#region
class MyPromise<T> {
	private state: State = 'pending'
	private value?: T
	private reason?: any
	private fulfilledCallbacks: Array<() => void> = []
	private rejectedCallbacks: Array<() => void> = []
	constructor(executor: Executor<T>) {
		const resolve = (value: T) => {
			if (this.state !== 'pending') return
			this.state = 'fulfilled'
			this.value = value
			queueMicrotask(() => {
				this.fulfilledCallbacks.forEach((cb) => cb())
			})
		}
		const reject = (reason: any) => {
			if (this.state !== 'pending') return
			this.state = 'rejected'
			this.reason = reason
			queueMicrotask(() => {
				this.rejectedCallbacks.forEach((cb) => cb())
			})
		}
		try {
			executor(resolve, reject)
		} catch (err) {
			reject(err)
		}
	}
	then<U = T>(
		onFulfilled?: (value: T) => U | MyPromise<U>,
		onRejected?: (reason: any) => U | MyPromise<U>,
	): MyPromise<U> {
		return new MyPromise<U>((resolve, reject) => {
			const fulfilledTask = () => {
				try {
					if (!onFulfilled) {
						resolve(this.value as unknown as U)
						return
					}
					const result = onFulfilled(this.value as T)

					if (result instanceof MyPromise) {
						result.then(resolve, reject)
					} else {
						resolve(result)
					}
				} catch (err) {
					reject(err)
				}
			}
			const rejectedTask = () => {
				try {
					if (!onRejected) {
						reject(this.reason)
						return
					}
					const result = onRejected(this.reason)
					if (result instanceof MyPromise) {
						result.then(resolve, reject)
					} else {
						resolve(result)
					}
				} catch (err) {
					reject(err)
				}
			}
			if (this.state === 'fulfilled') {
				queueMicrotask(fulfilledTask)
			} else if (this.state === 'rejected') {
				queueMicrotask(rejectedTask)
			} else {
				this.fulfilledCallbacks.push(fulfilledTask)
				this.rejectedCallbacks.push(rejectedTask)
			}
		})
	}
	catch<U = never>(
		onRejected: (reason: any) => U | MyPromise<U>,
	): MyPromise<T | U> {
		return this.then(undefined, onRejected)
	}
	finally(callback: () => void): MyPromise<T> {
		return this.then(
			(value) => {
				callback()
				return value
			},
			(reason) => {
				callback()
				throw reason
			},
		)
	}

	static resolve<T>(value: T): MyPromise<T> {
		return new MyPromise((resolve) => resolve(value))
	}

	static reject(reason: any): MyPromise<never> {
		return new MyPromise((_, reject) => reject(reason))
	}
}

MyPromise.resolve(100)
	.finally(() => {
		console.log('finally')
	})
	.then(console.log)

//#endregion

type ExcutorFn<T> = (
	resolve: (result: T) => void,
	reject: (reason: any) => void,
) => void
type PromiseState = 'pending' | 'fulfilled' | 'rejected'
class TPromise<T> {
	value: T | undefined // 存储成功的值
	reason: any // 失败原因
	state: PromiseState = 'pending'
	fulfilledCallbacks: Array<() => void> = [] // 用于存储then的成功回调
	rejectedCallbacks: Array<() => void> = []
	constructor(excutor: ExcutorFn<T>) {
		const resolve = (value: T) => {
			if (this.state !== 'pending') return // 状态一旦改变，不可逆
			this.state = 'fulfilled'
			this.value = value
			queueMicrotask(() => {
				this.fulfilledCallbacks.forEach((cb) => cb())
			})
		}
		const reject = (reason: any) => {
			if (this.state !== 'pending') return // 状态一旦改变，不可逆
			this.state = 'rejected'
			this.reason = reason
			queueMicrotask(() => {
				this.rejectedCallbacks.forEach((cb) => cb())
			})
		}
		try {
			excutor(resolve, reject)
		} catch (error) {
			reject(error)
		}
	}

	then<U = T>(
		onFulfilled?: (value: T) => U | TPromise<U>,
		onRejected?: (reason: any) => U | TPromise<U>,
	) {
		return new TPromise<U>((resolve, reject) => {
			const fulfilledTask = () => {
				try {
					if (!onFulfilled) {
						// 如果不存在成功回调，就返回resolve上一次的值
						resolve(this.value as unknown as U)
						return
					}
					const reslut = onFulfilled(this.value as T)
					if (reslut instanceof TPromise) {
						// 如果 onfulfilled 返回了一个新的prmose就重复
						reslut.then(resolve, reject)
					} else {
						resolve(reslut)
					}
				} catch (error) {
					reject(error)
				}
			}

			const rejectedTask = () => {
				try {
					if (!onRejected) {
						// 不存在新传入的onrejected，就使用默认是reject
						reject(this.reason)
						return
					}
					const result = onRejected(this.reason)
					if (result instanceof TPromise) {
						result.then(resolve, reject)
					} else {
						resolve(result)
					}
				} catch (error) {
					reject(error)
				}
			}
			if (this.state === 'fulfilled') {
				queueMicrotask(fulfilledTask)
			} else if (this.state === 'rejected') {
				queueMicrotask(rejectedTask)
			} else {
				this.fulfilledCallbacks.push(fulfilledTask)
				this.rejectedCallbacks.push(rejectedTask)
			}
		})
	}
	catch<U = never>(onRejected: (reason: any) => U | TPromise<U>) {
		return this.then(undefined, onRejected)
	}
	finally(cb: () => void): TPromise<T> {
		return this.then(
			(value) => {
				cb()
				return value
			},
			(reason) => {
				cb()
				throw reason
			},
		)
	}
	static resolve<T>(value: T): TPromise<T> {
		return new TPromise((resolve) => resolve(value))
	}
	static reject(reason: any) {
		return new TPromise((_, reject) => reject(reason))
	}
}

