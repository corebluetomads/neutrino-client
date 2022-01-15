import Form from 'components/Form'
import React, { useState } from 'react'
import { ICreateServerRequest } from 'api/endpoints/server/interfaces/request'

const CreateServerForm = (): JSX.Element => {
	const [data, setData] = useState<ICreateServerRequest>({} as ICreateServerRequest)

	return (
		<form className="w-full">
			<Form.Group>
				<Form.Label htmlFor="form-server-name">NAME</Form.Label>
				<Form.Input 
					id="form-server-name"
					onChange={(e) => setData({
						...data,
						name: e.target.value
					})}
				/>
			</Form.Group>
		</form>
	)
}

export default CreateServerForm
