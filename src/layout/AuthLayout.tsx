import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = (): JSX.Element => {
	return (
		<main className="w-full h-screen bg-cinder">
			<Outlet />
		</main>
	)
}

export default AuthLayout
