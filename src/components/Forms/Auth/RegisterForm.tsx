import axios from 'axios'
import Form from 'components/Form'
import Button from 'components/Button'
import React, { ChangeEvent, useState } from 'react'
import { IRegisterRequest } from 'api/endpoints/auth/interfaces'
import { useRegisterMutation } from 'hooks/queries/auth/auth'
import { displayValidationError } from 'helpers/Validation'
import { IResponseError } from 'api/endpoints/error/interfaces'
import { useNavigate } from 'react-router-dom'

const RegisterForm = (): JSX.Element => {
	const navigate = useNavigate()

	const [data, setData] = useState<IRegisterRequest>({} as IRegisterRequest)
	const [errors, setErrors] = useState<IResponseError>({} as IResponseError)

	const { mutate: registerMutation } = useRegisterMutation(data, {
		onSuccess: () => navigate('/login'),
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 422) {
					setErrors(error.response.data.errors)
				}
			}
		}
	})

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		registerMutation()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Form.Group errorMessage={displayValidationError('email', errors)}>
				<Form.Label htmlFor="register-form-email">EMAIL</Form.Label>
				<Form.Input
					type="email"
					value={data?.email}
					id="register-form-email"
					onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
						...data,
						email: event.target.value
					} as IRegisterRequest)}
				/>
			</Form.Group>
			<Form.Group errorMessage={displayValidationError('username', errors)}>
				<Form.Label htmlFor="register-form-username">USERNAME</Form.Label>
				<Form.Input
					type="text"
					value={data?.username}
					id="register-form-username"
					onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
						...data,
						username: event.target.value
					} as IRegisterRequest)}
				/>
			</Form.Group>
			<Form.Group errorMessage={displayValidationError('date_of_birth', errors)}>
				<Form.Label htmlFor="register-form-dob">DATE OF BIRTH</Form.Label>
				<Form.DatePeriodSelector
					setDOB={(dob) => setData({ ...data, date_of_birth: dob.format('YYYY-MM-DD') })}
				/>
			</Form.Group>
			<Form.Group errorMessage={displayValidationError('password', errors)}>
				<Form.Label htmlFor="register-form-password">PASSWORD</Form.Label>
				<Form.Input
					type="password"
					value={data?.password}
					id="register-form-password"
					onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
						...data,
						password: event.target.value
					} as IRegisterRequest)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor="register-form-confirm-password">CONFIRM PASSWORD</Form.Label>
				<Form.Input
					type="password"
					value={data?.password_confirmation}
					id="register-form-confirm-password"
					onChange={(event: ChangeEvent<HTMLInputElement>) => setData({
						...data,
						password_confirmation: event.target.value
					} as IRegisterRequest)}
				/>
			</Form.Group>
			<div className="flex justify-end mt-4">
				<div>
					<Button type="submit">
            Register
					</Button>
				</div>
			</div>
		</form>
	)
}

export default RegisterForm