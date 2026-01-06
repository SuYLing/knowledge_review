const arr = [
	{ id: 1, parentId: null, name: 'Root' },
	{ id: 5, parentId: null, name: 'Root' },
	{ id: 6, parentId: 5, name: 'Grandchild 1' },

	{ id: 2, parentId: 1, name: 'Child 1' },
	{ id: 3, parentId: 1, name: 'Child 2' },
	{ id: 4, parentId: 2, name: 'Grandchild 1' },
]
const arrayToTree = <
	T extends {
		id: number
		parentId: number | null
		children?: T[]
	}
>(
	arr: T[]
) => {
	const result: any[] = []
	// 创建一个map用于存储数据
	const map = new Map<
		number,
		T & {
			children: T[]
		}
	>()
	arr.forEach((item) => {
		map.set(item.id, {
			...item,
			children: [],
		})
	})

	// 进行清算
	arr.forEach((item) => {
		const node = map.get(item.id)!
		const parent = item.parentId !== null ? map.get(item.parentId) : null
		if (parent) {
			parent.children.push(node)
		} else {
			result.push(node)
		}
	})
	return result
}
const res = arrayToTree(arr)
console.log(res.length)
console.log(JSON.stringify(res, null, 2))
console.log(arr)
export {}

