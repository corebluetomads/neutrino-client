import React from 'react'

const ModalContent = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<div className="px-7 pb-[18px]">
			{children}
		</div>
	)
}

export default ModalContent