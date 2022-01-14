import React from 'react'

type LabelProps = {
  htmlFor: string,
  className?: string
  children: React.ReactNode,
}

const Label = ({
	htmlFor,
	children,
	className,
}: LabelProps) => {
	return (
		<div className="mb-[10px]">
			<label className={`font-roboto font-bold text-xs leading-6 text-white ${className}`} htmlFor={htmlFor}>
				{children}
			</label>
		</div>
	)
}

Label.defaultProps = {
	className: '',
}

export default Label
