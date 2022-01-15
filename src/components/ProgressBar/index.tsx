import React from 'react'
import ProgressBarStep from './step'

type ProgressBarProps = {
  stepCount: number,
	currentStep: number,
  stepNames: string[],
}

const ProgressBar = ({
	stepNames,
	stepCount = 1,
	currentStep
}: ProgressBarProps): JSX.Element => {  
	return (
		<div className="flex justify-between">
			{
				Array.from({ length: stepCount }).map((step, idx) => {
					return (
						<ProgressBar.Step
							key={idx}
							step={idx + 1}
							name={stepNames[idx]}
							currentStep={currentStep}
						/>
					)
				})
			}
		</div>
	)
}

ProgressBar.Step = ProgressBarStep

export default ProgressBar