//#region Set
/**
 * 1. 类似数组的数据结构
 * 2. 不允许存在重复值
 * 3. 可以存储任何类型的值 [原始值 对象引用]
 * */
const set = new Set()
set.add(1)
set.add({
	name: 'set',
})
set.forEach((v) => console.log('🚀 ~ v:', v))
//#endregion

//#region Map
/**
 * 1. 键值对组合
 * 2. 键可以是任何类型 ( 对象 函数 )
 * */
const map = new Map()
map.set({ name: 'map' }, 111)
map.set('age', '23')
map.set(1, '我是一个数字')
map.forEach((v, key) => console.log(v, key))
//#endregion

//#region WeakSet
/**
 * 1. 类似set的集合
 * 2. 只能存储对象引用
 * 3. 对于储存的对象是弱引用 [ 没有其它对这个对象的引用就会被回收掉 ]
 * */
let obj = {}
const weakSet = new WeakSet()
weakSet.add(obj)
console.log(weakSet.has(obj))

//#endregion

//#region WeakMap
/**
 * 1. 同 Map
 * 2. 键必须是对象
 * 3. 对于键也是弱引用
 * */
const weakMap = new WeakMap()
const objKey = {}
weakMap.set(objKey, 'value')
console.log(weakMap.has(objKey))
//#endregion
