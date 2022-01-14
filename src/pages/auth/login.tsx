import React from 'react'
import {
	NeutrinoLogo,
} from 'assets/icons'
import LoginForm from 'components/Forms/Auth/LoginForm'
import InlineLink from 'components/InlineLink'

const LoginPage = (): JSX.Element => {
	return (
		<div className="w-full max-w-[320px] px-5">
			<div className="my-5">
				<div className="flex flex-col items-center gap-3 mb-8">
					<NeutrinoLogo />
					<h1 className="font-roboto font-bold leading-[48px] text-[32px] text-white">
              Neutrino
					</h1>
				</div>
				<LoginForm />
				<div className="flex items-center justify-center w-full gap-1">
					<span className="text-sm font-medium text-white font-roboto">
              Forgot your password?
					</span>
					<div className="w-max">
						<InlineLink 
							label="Reset"
							to="/forgot-password" 
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginPage