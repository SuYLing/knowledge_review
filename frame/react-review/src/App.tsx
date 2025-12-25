import { useLayoutEffect, useRef } from 'react'
import { CommonCounter } from './components/common-counter'
import { Counter, CounterProvider } from './components/counter'
import { Input } from './components/ui/input'

function App() {
	// useEffect(() => {
	// 	fetch(
	// 		'https://nominatim.openstreetmap.org/reverse?lat=30.799292&lon=103.950328&format=json&accept-language=zh-cn'
	// 	).then((res) => {
	// 		console.log(res.json())
	// 	})
	// }, [])
	// useEffect(() => {
	// 	fetch(
	// 		`https://api.tianditu.gov.cn/geocoder?postStr={'lon':103.950328,'lat':30.79929,'ver':1}&type=geocode&tk=90d0ebd89bc0affa1d00640507c7f69f`
	// 	).then((res) => {
	// 		console.log(res.json())
	// 	})
	// }, [])
	const inputRef = useRef<HTMLInputElement>(null)
	useLayoutEffect(() => {
		if (inputRef.current) {
			inputRef.current.setCustomValidity(
				'init empty error: please enter something'
			)
		}
	}, [])
	return (
		<div>
			<h1 className="text-red-500">Hello React</h1>
			<form className="border p-4 flex flex-col space-y-2 max-w-68">
				<Input
					type="text"
					ref={inputRef}
					required
					maxLength={12}
					min={4}
					onChange={(e) => {
						const input = e.currentTarget
						if (input.value === '') {
							input.setCustomValidity('empty')
						} else {
							input.setCustomValidity('')
						}
					}}
				/>

				<button
					className="bg-purple-400 box-border p-2 rounded-md transition-colors text-white hover:bg-purple-400/90 cursor-pointer"
					onClick={(e) => {
						e.preventDefault()
						if (inputRef.current) {
							inputRef.current.reportValidity()
						}
					}}
				>
					sumbit
				</button>
			</form>
			<CounterProvider>
				<Counter />
			</CounterProvider>
			<CommonCounter />
		</div>
	)
}

export default App

