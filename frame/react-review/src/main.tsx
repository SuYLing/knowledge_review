import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactQueryProvider } from './providers/react-query-provider.tsx'
import { TanstackRouterProvider } from './providers/tanstack-router-provider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReactQueryProvider>
			<TanstackRouterProvider />
		</ReactQueryProvider>
	</StrictMode>,
)

