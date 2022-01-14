import { IResponseError } from 'api/endpoints/error/interfaces'
import React, { useState } from 'react'

const AddServerForm = (): JSX.Element => {
	const [error, setErrors] = useState<IResponseError>({} as IResponseError)
	const [data, setData] = useState<{thumbnail: File | null, name: string, }>({ thumbnail: null, name: '' })

	return (
		<form className="w-full">

		</form>
	)
}

export default AddServerForm
