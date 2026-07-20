type Fn = (...args: any[]) => any
export function debounce<T extends Fn>(
	fn: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let timer: number | null = null
	return function (this: any, ...args) {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}

export function debounceImmediate<T extends Fn>(
	fn: T,
	delay: number,
): (...args: Parameters<T>) => void {
	let timer: number | null = null
	let isInvoked = false // 是否已经立即执行过

	return function (this: any, ...args: Parameters<T>) {
		// 第一次立即执行
		if (!isInvoked) {
			fn.apply(this, args)
			isInvoked = true
		}

		// 清除之前的定时器
		if (timer) {
			clearTimeout(timer)
		}

		// 设置新的定时器，延迟后重置状态
		timer = setTimeout(() => {
			isInvoked = false
		}, delay)
	}
}

export function debounceJ(fn, delay) {
	let timer = null
	return function (this, ...args) {
		if (timer) clearTimeout(timer)

		timer = setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}

export function debounceIJ(fn, delay) {
	let timer = null
	return function (this, ...args) {
		if (timer) clearTimeout(timer)

		timer = setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}