import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ModalHeader from 'components/Modals/header'
import ModalContent from 'components/Modals/content'

const Modal = ({
	children,
	onClose,
	isOpen,
}: {
  isOpen: boolean
  onClose: () => void,
  children: React.ReactNode,
}) => {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={onClose} className="absolute inset-0">
				<div className="flex items-center justify-center min-h-screen">
					<Transition.Child
						as={Fragment}
						enter="transition duration-300 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-150 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter="transition duration-150 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-150 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<div className="relative w-full max-w-sm mx-auto rounded-md bg-shark">
							{children}
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}

Modal.Header = ModalHeader
Modal.Content = ModalContent

export default Modal
