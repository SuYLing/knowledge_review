import { useState, type FC, type ReactNode } from 'react'
import { CounterContext, useCounterContext } from './counter-context'

export const CounterProvider: FC<{
	children: ReactNode
}> = ({ children }) => {
	const [counter, setCounter] = useState(0)
	const increment = () => setCounter((pre) => pre + 1)
	const decrement = () => setCounter((pre) => pre - 1)

	return (
		<CounterContext.Provider
			value={{
				counter,
				increment,
				decrement,
			}}
		>
			{children}
		</CounterContext.Provider>
	)
}

export const Counter = () => {
	const { counter, increment, decrement } = useCounterContext()
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	)
}
