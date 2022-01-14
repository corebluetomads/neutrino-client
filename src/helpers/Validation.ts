
export const displayValidationError = (identifier: string, errors: object | unknown): (string | undefined) => {
	if (!errors) return

	let validationError = ''

	if (errors instanceof Object) {
		Object.entries(errors).forEach(([key, value]) => {
			if (key === identifier) {
				validationError = value[0]
			}
		})
	}

	return validationError
}
