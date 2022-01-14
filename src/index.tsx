import './index.css'
import React from 'react'
import Router from 'router'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
