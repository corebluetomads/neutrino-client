import React from 'react'
import App from 'App'
import LoginPage from 'pages/auth/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from 'layout/PublicLayout'
import PrivateRoute from 'PrivateRoute'
import AuthLayout from 'layout/AuthLayout'
import RegisterPage from 'pages/auth/register'
import ForgotPasswordPage from 'pages/auth/forgot-password'
import DashboardPage from 'pages/dashboard'

const Router = () => {
	return (
		<BrowserRouter>
			<App>
				<Routes>
					<Route element={<PublicLayout />}>
						<Route index element={<LoginPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/forgot-password" element={<ForgotPasswordPage />} />
					</Route>

					<Route element={<PrivateRoute />}>
						<Route element={<AuthLayout />}>
							<Route path="/dashboard" element={<DashboardPage />} />
						</Route>
					</Route>
				</Routes>
			</App>
		</BrowserRouter>
	)
}

export default Router