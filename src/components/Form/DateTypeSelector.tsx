import {
	ChevronIcon,
} from 'assets/icons'
import { Listbox } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { TDateType } from 'types/DateType'
import React, { Fragment, useState } from 'react'

enum DateFormatType {
  'year' = 'YYYY',
  'month' = 'MM',
  'day' = 'DD'
}

type DateSelectorProps = {
  type: TDateType,
  data: Array<string | number>,
  selectedItem: string | number | undefined,
  setSelectedItem: (item: string) => void
}

const DateTypeSelector = ({
	data,
	type,
	selectedItem,
	setSelectedItem,
}: DateSelectorProps): JSX.Element => {
	const [isShowing, setIsShowing] = useState<boolean>(false)

	return (
		<div className="relative w-full">
			<Listbox value={selectedItem} onChange={setSelectedItem}>
				<Listbox.Button
					onClick={() => setIsShowing(!isShowing)}
					aria-label={`Select the ${type} you was born`}
					className="w-full min-w-[80px] outline-none border border-outerSpace focus:border-dodgerBlue hover:border-dodgerBlue rounded overflow-hidden"
				>
					<div className={`bg-outerSpace h-[35px] border border-outerSpace ${type === 'month' ? 'w-[120px]' : undefined} flex items-center`}>
						<div className="flex items-center justify-between w-full px-3">
							<span className="mr-2 text-sm font-normal leading-6 text-white font-roboto">
								{selectedItem ? selectedItem : DateFormatType[type]}
							</span>
							<ChevronIcon aria-hidden="true" className="w-3 text-white" />
						</div>
					</div>
				</Listbox.Button>
				<Transition
					as={Fragment}
					enter="transition-opacity duration-75"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute inset-x-0 rounded bg-outerSpace overflow-y-auto max-h-[145px] scrollbar-none shadow outline-none">
						{
							data && data?.length > 0 && data.map((item) => (
								<Listbox.Option
									value={item}
									key={`${type}-${item}`}
									className="h-[35px] cursor-pointer border-outerSpace hover:bg-dodgerBlue"
								>
									<div className="px-4 py-1">
										<span className="text-sm font-normal leading-6 text-white">
											{item}
										</span>
									</div>
								</Listbox.Option>
							))
						}
					</Listbox.Options>
				</Transition>
			</Listbox>
		</div>
	)
}

export default DateTypeSelector
