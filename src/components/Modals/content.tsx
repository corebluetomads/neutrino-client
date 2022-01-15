import React from 'react'

const ModalContent = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<div className="my-3">
			{children}
		</div>
	)
}

export default ModalContent