import React from 'react'
import {
	OpenLockIcon,
} from 'assets/icons'
import ForgotPasswordForm from 'components/Forms/Auth/ForgotPasswordForm'

const ForgotPasswordPage = (): JSX.Element => {
	return (
		<div className="w-full max-w-[330px] px-5">
			<div className="my-5">
				<div className="flex flex-col items-center gap-3 mb-6">
					<OpenLockIcon />
					<div className="flex flex-col items-center gap-1">
						<h1 className="font-roboto font-bold leading-[48px] text-[32px] text-white mt-4">
						Forgot Password
						</h1>
						<p className="text-sm font-normal text-center text-white font-roboto">
						Enter the email associated with your account and
						if we find it, we will send you a reset code
						</p>
					</div>
				</div>
				<ForgotPasswordForm />
			</div>
		</div>
	)
}

export default ForgotPasswordPage
