import React from 'react'
import classNames from 'classnames'

type ProgressBarStepProps = {
  step: number,
  name: string,
  currentStep: number,
}

const ProgressBarStep = ({
	name,
	step,
	currentStep
}: ProgressBarStepProps) => {
	const className = classNames(
		'border-2 rounded-full w-[45px] h-[45px]', {
			'text-mirage border-mirage': currentStep < step,
			'border-dodgerBlue text-white': currentStep === step,
			'bg-dodgerBlue border-dodgerBlue text-white': currentStep > step
		}
	)

	return (
		<div className="flex flex-col items-center gap-3">
			<div className={className}>
				<div className="flex items-center justify-center w-full h-full">
					<span className="text-sm font-bold text-center">
						{step}
					</span>
				</div>
			</div>

			<span className="text-[10px] font-semibold text-white tracking-wider font-roboto">
				{name}
			</span>
		</div>
	)
}

export default ProgressBarStep


{/* <div>
<div className="mb-1">
  <div className="w-max">
    <div className="border-4 rounded-full border-dodgerBlue">
      <div className="px-3 py-[5px]">
        <span className="font-bold text-white text-md font-roboto">
          {position}
        </span>
      </div>
    </div>
  </div>
</div>

<span className="text-[10px] font-semibold text-white  font-roboto">
  {name}
</span>
</div> */}