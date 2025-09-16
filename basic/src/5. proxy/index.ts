const obj = {
	name: 'yuling',
	age: 22,
}
const proxy = new Proxy<typeof obj>(obj, {
	get(t, p) {
		console.log(p)
		return p in t ? t[p as keyof typeof obj] : 'not found'
	},
})

console.log(proxy.age)
