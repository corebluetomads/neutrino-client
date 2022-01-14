import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { IForgotPasswordRequest } from 'api/endpoints/auth/interfaces'
import { IResponseError } from 'api/endpoints/error/interfaces'
import { displayValidationError } from 'helpers/Validation'
import { useForgotPasswordMutation } from 'hooks/queries/auth/auth'
import Button from 'components/Button'
import Form from 'components/Form'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordForm = (): JSX.Element => {
	const navigate = useNavigate()

	const [data, setData] = useState<IForgotPasswordRequest>({} as IForgotPasswordRequest)
	const [errors, setErrors] = useState<IResponseError>({} as IResponseError)

	const { mutate: forgotPasswordMutation, isLoading } = useForgotPasswordMutation(data, {
		onSuccess: () => navigate('/login'),
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 422) {
					setErrors({
						messages: error.response.data.errors,
						status: error.response.status,
					})
				}
			}
		},
	})

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		forgotPasswordMutation()
	}

	return (
		<form onSubmit={handleSubmit}>
			<Form.Group errorMessage={displayValidationError('email', errors)}>
				<Form.Label htmlFor="form-email">EMAIL</Form.Label>
				<Form.Input
					id="form-email"
					value={data?.email}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setData({ email: e.target.value })}
				/>
			</Form.Group>
			<div className="flex justify-end mt-7">
				<div>
					<Button type="submit" disabled={!(data?.email?.length > 0) || isLoading}>
            Reset
					</Button>
				</div>
			</div>
		</form>
	)
}

export default ForgotPasswordForm
