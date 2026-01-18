import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { FC, PropsWithChildren } from 'react'
interface TanstackRouterProviderProps extends PropsWithChildren {}

// Import the generated route tree
import { routeTree } from '../routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

export const TanstackRouterProvider: FC<TanstackRouterProviderProps> = () => {
	return <RouterProvider router={router} />
}

