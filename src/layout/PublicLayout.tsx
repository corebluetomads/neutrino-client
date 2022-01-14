import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
	// TODO: Redirect to dashboard if logged in

	return (
		<main className="flex items-center justify-center min-h-screen bg-shark">
			<Outlet />
		</main>
	)
}

PublicLayout.defaultProps = {
	className: '',
}

export default PublicLayout
