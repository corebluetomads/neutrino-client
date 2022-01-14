import React from 'react'

const ModalContent = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<div className="px-8 py-6">
			{children}
		</div>
	)
}

export default ModalContent