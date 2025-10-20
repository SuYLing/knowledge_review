import { createContext, useContext } from 'react'

export const CounterContext = createContext<{
	counter: number
	increment: () => void
	decrement: () => void
}>({
	counter: 0,
	increment() {},
	decrement() {},
})

export const useCounterContext = () => {
	const context = useContext(CounterContext)
	if (!context) {
		throw new Error('CounterContext must use in a Provider')
	}
	return context
}
