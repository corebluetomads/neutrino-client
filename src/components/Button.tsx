import React from 'react'

type ButtonProps = {
  disabled?: boolean,
  className?: string,
  children: React.ReactNode
  type?: 'button' | 'submit',
  variant?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  onSubmit?: React.FormEventHandler<HTMLButtonElement>
}

const Button = ({
	type = 'button',
	size = 'small',
	variant = 'primary',
	onClick,
	disabled = false,
	onSubmit,
	children,
	className,
}: ButtonProps) => {

	let sizeClassName = ''
	switch (size) {
	case 'small':
	default:
		sizeClassName = 'h-[35px]'
	}

	let variantClassName = ''
	switch (variant) {
	case 'secondary':
		variantClassName = 'text-dodgerBlue border-2 bg-transparent border-dodgerBlue'
		break
	case 'primary':
	default:
		variantClassName = 'bg-dodgerBlue text-white border-none hover:bg-opacity-90'
	}

	const disabledStyling = disabled ? 'bg-manatee hover:bg-opacity-100 cursor-default' : undefined

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			onSubmit={onSubmit}
			className={`leading-[18px] w-full rounded-lg font-roboto text-xs font-bold px-10 ${disabledStyling} ${className} ${sizeClassName} ${variantClassName}`}
		>
			{children}
		</button>
	)
}

export default Button
