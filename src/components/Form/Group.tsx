import React from 'react'

type GroupProps = {
  className?: string | null,
  errorMessage?: string | null,
  children: React.ReactNode,
}

const Group = ({
	children,
	className,
	errorMessage,
}: GroupProps) => {
	return (
		<div className={`w-full mb-[15px] ${className}`}>
			{children}
			<div className="mt-1">
				{
					errorMessage && (
						<span className="text-sm font-light text-red-500">{errorMessage}</span>
					)
				}
			</div>
		</div>
	)
}

Group.defaultProps = {
	className: '',
	errorMessage: '',
}

export default Group
