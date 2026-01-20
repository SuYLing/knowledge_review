import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getBooks } from '../apis/books'
import type { Books } from '../types/apis/books'

export const Route = createFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	const [data, setData] = useState<Books.BookInfo[]>([])
	useEffect(() => {
		getBooks()
			.then((res) => setData(res.data))
			.catch((err) => console.error(err))
	}, [])
	return (
		<div>
			<h1 className="text-red-400">书籍</h1>
			<ul>
				{data.map((d) => (
					<li key={d._id} className="flex flex-col">
						<span>{d.author}</span>
						<span>{d.title}</span>
						<span>{d.year}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

