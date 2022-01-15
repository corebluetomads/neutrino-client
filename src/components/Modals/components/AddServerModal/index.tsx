import React, { useState } from 'react'
import Modal from 'components/Modals'
import ProgressBar from 'components/ProgressBar'
import Step1DefineServer from './steps/1_DefineServer'

const AddServerModal = ({
	isOpen = false,
	onClose
}: { isOpen: boolean, onClose: () => void }): JSX.Element => {
	const [currentStep, setCurrentStep] = useState<number>(1)

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Modal.Header title="Create server" onCancel={onClose} />

			<Modal.Content>
				<div className="mt-5">
					<div className="px-2 sm:px-4">
						<ProgressBar 
							stepCount={3}
							stepNames={[
								'DEFINE SERVER',
								'SETUP ROLES',
								'ADD MEMBERS'
							]}
							currentStep={currentStep}
						/>
					</div>
				</div>
        
				{currentStep === 1 && <Step1DefineServer />}
			</Modal.Content>
		</Modal>
	)
}

export default AddServerModal