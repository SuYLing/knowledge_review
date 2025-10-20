import { Counter, CounterProvider } from './components/counter'

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
	return (
		<div>
			<h1 className="text-red-500">Hello React</h1>
			<CounterProvider>
				<Counter />
			</CounterProvider>
		</div>
	)
}

export default App

