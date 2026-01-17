import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState, type FC, type PropsWithChildren } from 'react'
interface ReactQueryProviderProps extends PropsWithChildren {}
export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({
	children,
}) => {
	const [queryClient] = useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

