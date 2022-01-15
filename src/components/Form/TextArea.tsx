import React from 'react'

type TextAreaProps = {
  id: string,
  rows?: number,
  value: string,
  columns?: number,
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextArea = ({
	id,
	value,
	onChange,
	rows = 5,
	columns = 1,
}: TextAreaProps): JSX.Element => {
	return (
		<textarea 
			id={id}
			rows={rows}
			value={value}
			cols={columns}
			onChange={onChange}
			className={`
			bg-outerSpace 
				w-full rounded-lg px-3 py-2
				border border-transparent outline-none
				font-roboto font-medium text-xs leading-6 text-white
				focus:border focus:border-dodgerBlue 
			`}
		/>
	)
}

export default TextArea