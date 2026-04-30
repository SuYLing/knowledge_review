import type { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
	return <main className="container mx-auto max-w-2xl">{children}</main>
}

