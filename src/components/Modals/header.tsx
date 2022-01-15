import React from 'react'
import { CrossIcon } from 'assets/icons'

const ModalHeader = ({ 
	title, 
	onCancel 
}: { title: string, onCancel: () => void }): JSX.Element => {
	return (
		<div className="px-7 pt-[18px]">
			<div className="mb-3">
				<div className="flex items-center justify-between">
					<h1 className="text-lg font-medium text-white font-roboto">
						{title}
					</h1>

					<button
						onClick={onCancel}
						className="rounded-full w-[30px] h-[30px] bg-mirage hover:bg-red-500 outline-none" 
					>
						<div className="flex items-center justify-center h-full">
							<CrossIcon />
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ModalHeader