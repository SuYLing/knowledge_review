import type { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
	return (
		<div className="min-w-svw min-h-svh flex items-center justify-center">
			{children}
		</div>
	)
}

