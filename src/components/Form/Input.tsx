import React, { forwardRef } from 'react'

type InputProps = {
  id: string,
  value?: string,
  className?: string,
  type?: 'text' | 'password' | 'email',
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input ({
	id,
	value,
	onChange,
	className,
	type = 'text',
}: InputProps, ref) {
	return (
		<div className="w-full">
			<input
				id={id}
				ref={ref}
				type={type}
				value={value}
				onChange={onChange}
				className={`
				bg-outerSpace 
					outline-none
					h-9 w-full px-3 rounded-md
					font-roboto font-medium text-xs leading-6 text-white
					focus:border focus:border-dodgerBlue 
					${className}
				`}
			/>
		</div>
	)
})

export default Input
