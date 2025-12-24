/** 特点
 * 1. 唯一性
 * 2. 不可变性
 * 3. 常用于对象属性声明
 * 4. 不能普通遍历, 可通过  Object.getOwnPropertySymbols()
 * */

const symbol1 = Symbol('symbol1')
console.log('🚀 ~ symbol1:', symbol1)
const obj = {
	[symbol1]: 'this is a symbol',
	name: 'obj1',
}
console.log('🚀 ~ obj:', obj)
for (let key in obj) {
	console.log('🚀 ~ key:', key)
}
console.log(Object.getOwnPropertySymbols(obj))
// 全局注册
const globalSymbol = Symbol.for('global')
const globalSymbol2 = Symbol.for('global')
console.log(globalSymbol === globalSymbol2) // true
console.log('🚀 ~ Symbol.keyFor(globalSymbol);:', Symbol.keyFor(globalSymbol))
