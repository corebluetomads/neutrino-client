import React from 'react'
import RegisterForm from 'components/Forms/Auth/RegisterForm'

const RegisterPage = (): JSX.Element => {
	return (
		<div className="w-full max-w-[360px]">
			<div className="px-5 my-5">
				<div className="mb-8">
					<h1 className="font-roboto font-bold leading-[48px] text-[32px] text-white">
					Register
					</h1>
				</div>
				<RegisterForm />
			</div>
		</div>
	)
}

export default RegisterPage
