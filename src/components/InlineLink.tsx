import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

type TLinkProps = {
  to: string,
  label?: string,
  className?: string,
  size?: 'small' | 'medium',
  variant?: 'primary' | 'secondary'
}

const InlineLink = ({
	to,
	label,
	size = 'small',
	variant = 'primary',
}: TLinkProps): JSX.Element => {
	const className = classNames(
		'font-roboto w-full font-bold text-xs flex items-center justify-center', {
			// Sizes
			'h-[35px]': size === 'small',

			// Variants
			'text-dodgerBlue text-sm': variant === 'primary',
			'border-2 rounded-lg border-dodgerBlue px-10 hover:bg-dodgerBlue text-white': variant === 'secondary'
		})

	return (
		<Link 
			to={to}
			className={className}
		>
			{label}
		</Link>
	)
}

export default InlineLink