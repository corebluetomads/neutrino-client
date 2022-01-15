import React from 'react'

const ServerListItem = ({
	setSelected,
	thumbnailLink,
	isActive = false,
}: {
  isActive: boolean,
  setSelected: () => void,
  thumbnailLink?: string | null,
}): JSX.Element => {

	const activeStyling = isActive ? 'border-4 rounded-full bg-none border-dodgerBlue' : undefined

	return (
		<li className={`w-[64px] h-[64px] transition-colors ${activeStyling}`} onClick={setSelected}>
			<div className="flex items-center justify-center h-full">
				{
					thumbnailLink ? (
						<img className="w-[50px] h-[50px] object-fit rounded-full" src={thumbnailLink} alt="" />
					) : (
						<div>X</div>
					)
				}
			</div>
		</li>
	)
}

export default ServerListItem