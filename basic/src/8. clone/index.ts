type AnyObject = Record<PropertyKey, any>

function deepClone<T>(target: T, map: WeakMap<object, any> = new WeakMap()): T {
	// 1. 原始类型直接返回
	if (typeof target !== 'object' || target === null) {
		return target
	}

	// 2. 循环引用处理
	if (map.has(target)) {
		return map.get(target)
	}

	// 3. 内置对象处理
	if (target instanceof Date) {
		return new Date(target.getTime()) as T
	}

	if (target instanceof RegExp) {
		return new RegExp(target.source, target.flags) as T
	}

	if (target instanceof Map) {
		const clone = new Map()
		map.set(target, clone)

		target.forEach((value, key) => {
			clone.set(deepClone(key, map), deepClone(value, map))
		})

		return clone as T
	}

	if (target instanceof Set) {
		const clone = new Set()
		map.set(target, clone)

		target.forEach((value) => {
			clone.add(deepClone(value, map))
		})

		return clone as T
	}

	// 4. 数组 / 普通对象（保持原型）
	const clone: AnyObject = Array.isArray(target)
		? []
		: Object.create(Object.getPrototypeOf(target))

	map.set(target, clone)

	// 5. 拷贝自身属性（含 Symbol）
	const keys: PropertyKey[] = [
		...Object.getOwnPropertyNames(target),
		...Object.getOwnPropertySymbols(target),
	]

	for (const key of keys) {
		clone[key] = deepClone((target as AnyObject)[key], map)
	}

	return clone as T
}

// 测试用例
const original = {
	num: 123,
	date: new Date(),
	regex: /hello/gi,
	map: new Map([['key', { value: 'val' }]]),
	set: new Set([1, 2, 3]),
	arr: [1, 2, { nested: 'object' }],
	symbolKey: Symbol('sym'),
	[Symbol('id')]: 456,
}

// 创建循环引用
original.self = original
original.map.get('key').parent = original

const cloned = deepClone(original)

console.log(cloned !== original) // true
console.log(cloned.date instanceof Date) // true
console.log(cloned.map instanceof Map) // true
console.log(cloned.self === cloned) // true - 循环引用被正确保留
console.log(cloned.map.get('key').parent === cloned) // true - 嵌套引用也正确

