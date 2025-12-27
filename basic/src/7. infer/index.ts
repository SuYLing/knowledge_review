const fn = (num: number, str: string) => {
	return [1, 2, 3]
}
type Fn = typeof fn

type ParamsType<T> = T extends (params1: infer P, params2: infer R) => number[]
	? [P, R]
	: never
type ParamsType2<T> = T extends (...params1: infer P) => number[] ? P : never

type ReturnType<T> = T extends (...params: any) => infer R ? R : never
const test: ParamsType<Fn> = [1, '2']
const p: ParamsType2<Fn> = [1, '']
const te: ReturnType<Fn> = [2, 3]
console.log(test, te)

interface Original {
	name: string
	age: number
}
type Optional<T> = {
	[K in keyof T]?: T[K]
}
// const data1: Original = {
// 	name: '111',
// }
const data: Optional<Original> = {
	name: '111',
}

type Readonly<T> = {
	readonly [K in keyof T]: T[K]
}

type MyPick<T, K extends keyof T> = {
	[P in K]: T[K]
}
const d: MyPick<Original, 'age'> = {
	age: 12,
}

type MyOmit<T, K extends keyof T> = {
	[P in keyof T as P extends K ? never : P]: T[P]
}

const d2: Omit<Original, 'age' | 'name'> = {
	name: '',
	d: '2',
}

