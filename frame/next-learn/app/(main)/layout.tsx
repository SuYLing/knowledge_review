import { Header } from '@/components/header'
import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<main>
			<Header />
			{children}
		</main>
	)
}

