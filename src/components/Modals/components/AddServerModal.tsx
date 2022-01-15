import React from 'react'
import Modal from '..'
import AddServerForm from 'components/Forms/Modals/CreateServerForm'

const AddServerModal = ({
	isOpen = false,
	onClose
}: { isOpen: boolean, onClose: () => void }): JSX.Element => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Modal.Header title="Create server" onCancel={onClose} />

			<Modal.Content>
				<AddServerForm />
			</Modal.Content>
		</Modal>
	)
}

export default AddServerModal