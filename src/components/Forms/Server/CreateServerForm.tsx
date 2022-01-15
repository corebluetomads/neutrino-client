import Form from 'components/Form'
import React, { useState } from 'react'
import { ICreateServerRequest } from 'api/endpoints/server/interfaces/request'
import Button from 'components/Button'

const CreateServerForm = ({ 
	stepCount,
	currentStep, 
}: { currentStep: number, stepCount: number }): JSX.Element => {
	const [data, setData] = useState<ICreateServerRequest>({} as ICreateServerRequest)

	return (
		<form className="w-full">
			<Form.Group>
				<Form.Label htmlFor="form-server-name">
					NAME
				</Form.Label>
				<Form.Input 
					id="form-server-name"
					value={data.name}
					onChange={(e) => setData({
						...data,
						name: e.target.value
					})}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor="form-server-description">
					DESCRIPTION
				</Form.Label>
				<Form.TextArea 
					id="form-server-description"
					rows={3}
					value={data.description}
					onChange={(e) => setData({
						...data,
						description: e.target.value
					})}
				/>
			</Form.Group>

			<div className="border-t border-outerSpace">
				<div className="mt-[18px]">
					<div className="flex justify-end">
						<div className="max-w-[135px]">
							<Button 
								type="submit"
							>
								{currentStep === stepCount ? 'Create' : 'Continue'}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default CreateServerForm
