import React from 'react'
import { CrossIcon } from 'assets/icons'

const ModalHeader = ({ title, onCancel }: { title: string, onCancel: () => void }): JSX.Element => {
	return (
		<div className="border-b border-mirage">
			<div className="px-8 py-[18px]">
				<div className="flex items-center justify-between">
					<h1 className="text-lg font-medium text-white font-roboto">
						{title}
					</h1>

					<button className="rounded-full w-[25px] h-[25px] bg-mirage hover:bg-red-500 outline-none" onClick={onCancel}>
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