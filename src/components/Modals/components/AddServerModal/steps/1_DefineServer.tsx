import React from 'react'

import AddServerForm from 'components/Forms/Server/CreateServerForm'

const Step1DefineServer = (): JSX.Element => {
	return (
		<div>
			<div className="my-5">
				<p className="text-sm font-semibold text-left text-manatee font-roboto">
					You can create your own server and invite your friends and community 
					together into a single place to interact with.
				</p>
			</div>

			<AddServerForm 
				stepCount={3}
				currentStep={1}
			/>
		</div>
	)
}

export default Step1DefineServer