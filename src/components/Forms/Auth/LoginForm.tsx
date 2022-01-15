import axios from 'axios'
import Form from 'components/Form'
import Button from 'components/Button'
import InlineLink from 'components/InlineLink'
import { useNavigate } from 'react-router-dom'
import React, { ChangeEvent, useState } from 'react'
import { IResponseError } from 'api/endpoints/error'
import { useLoginMutation } from 'hooks/queries/auth/auth'
import { displayValidationError } from 'helpers/Validation'
import { ILoginRequest } from 'api/endpoints/auth/interfaces/request'

const LoginForm = (): JSX.Element => {
	const navigate = useNavigate()

	const [data, setData] = useState<ILoginRequest>({} as ILoginRequest)
	const [errors, setErrors] = useState<IResponseError>({} as IResponseError)

	const { mutate: loginMutation, isLoading } = useLoginMutation(data, {
		onSuccess: () => navigate('/dashboard'),
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 422) {
					setErrors(error.response.data.errors)
				}
			}
		},
	})

	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		loginMutation()
	}

	return (
		<form onSubmit={handleLogin}>
			<div className="mb-8">
				<Form.Group errorMessage={displayValidationError('email', errors)}>
					<Form.Label htmlFor="login-form-email">EMAIL</Form.Label>
					<Form.Input
						type="email"
						id="login-form-email"
						value={data?.email}
						onChange={
							(event: ChangeEvent<HTMLInputElement>) => setData({
								...data,
								email: event.target.value,
							} as ILoginRequest)
						}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor="login-form-password">PASSWORD</Form.Label>
					<Form.Input
						type="password"
						id="login-form-password"
						value={data?.password}
						onChange={
							(event: ChangeEvent<HTMLInputElement>) => setData({
								...data,
								password: event.target.value,
							} as ILoginRequest)
						}
					/>
				</Form.Group>
			</div>
			<div className="flex flex-wrap gap-3 mb-8 sm:flex-nowrap">
				<Button type="submit" disabled={!(data?.email && data?.password) || isLoading}>
          Login
				</Button>
				<InlineLink
					to="/register"
					label="Register"
					variant="secondary"
				/>
			</div>
		</form>
	)
}

export default LoginForm
