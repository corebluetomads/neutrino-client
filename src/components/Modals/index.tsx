import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ModalHeader from 'components/Modals/header'
import ModalContent from 'components/Modals/content'

const Modal = ({
	isOpen,
	onClose,
	children,
	container = 'max-w-[499px]'
}: {
	isOpen: boolean
	container?: string,
  onClose: () => void,
  children: React.ReactNode,
}) => {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={onClose} className="absolute inset-0">
				<div className="flex items-center justify-center min-h-screen">
					<Transition.Child
						as={Fragment}
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-300 ease-out"
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
						leave="transition duration-300 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<div className={`mx-auto px-6 relative w-full ${container}`}>
							<div className={'rounded-md bg-shark shadow-md'}>
								{children}
							</div>
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
