import { useState } from 'react'

export const CommonCounter = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		console.log('点击前 count:', count) // 0
		setCount(count + 1)
		setCount(count + 1)
		setCount(count + 1)
		setCount(count + 1)
		setCount(count + 1)
		setCount(count + 1)
		console.log('点击后 count:', count) // 仍然是 0，不是1！
		// ✅ 状态并未立即改变
	}

	return <button onClick={handleClick}>点击{count}</button>
}

