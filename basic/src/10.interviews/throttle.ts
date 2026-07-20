type Fn = (...args: any[]) => any
/**
 * 本质
 * 1. 在一定时间内只执行一次
 * 2. 重复执行则累计，按照一定间隔执行
 * */
export function throttle<T extends Fn>(
	fn: T,
	delay: number,
	options: { leading: boolean } = { leading: false }, // 可选参数，控制是否立即执行
): (...args: Parameters<T>) => void {
	// 请在这里实现
	let timer: number | null = null
	let lastTime = 0
	return function (this: any, ...args) {
		const now = Date.now()
		// 处理 leading（立即执行）
		if (options.leading && now - lastTime > delay) {
			fn.apply(this, args)
			lastTime = now
			return
		}
		// 普通节流逻辑
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, args)
				lastTime = Date.now()
				timer = null
			}, delay)
		}
	}
}

export function throttleSimplified<T extends Fn>(
	fn: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let lastTime = 0

	return function (this: any, ...args: Parameters<T>) {
		const now = Date.now()

		if (now - lastTime >= delay) {
			fn.apply(this, args)
			lastTime = now
		}
	}
}

export function throttleTimestamp(fn, delay) {
	let lastTime = Date.now()
	return function (this, ...args) {
		const now = Date.now()
		if (now - lastTime > delay) {
			fn.apply(this, args)
			lastTime = now
		}
	}
}

export function throttleTimer(fn, delay, leading = false) {
	let timer = null
	let lastTime = 0
	return function (this, ...args) {
		if (leading && Date.now() - lastTime >= delay) {
			fn.apply(this, args)
			lastTime = Date.now()
			return
		}
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, args)
				timer = null
			}, delay)
		}
	}
}

const throttledFn2 = throttleTimer(
	() => {
		console.log('触发了')
	},
	4000,
	true,
)

setInterval(() => {
	;(throttledFn2(), 50)
})

