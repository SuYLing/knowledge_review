import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Outlet, createRootRoute } from '@tanstack/react-router'
export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<>
			<div>Hello "__root"!</div>
			<Outlet />
			<TanStackRouterDevtools initialIsOpen={false} />
		</>
	)
}

