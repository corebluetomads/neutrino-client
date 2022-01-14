import Form from './index'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { TDate } from 'types/Date'

const DatePeriodSelector = ({ setDOB }: { setDOB: (dob: dayjs.Dayjs) => void }): JSX.Element => {
	const [selectedDate, setSelectedDate] = useState<TDate>({} as TDate)

	const currentYear = parseInt(dayjs().format('YYYY'))
	const yearMonths = Array.from(Array(12).keys()).map((_, idx) => dayjs().month(idx).format('MMMM'))

	useEffect(() => {
		let date = dayjs()

		if (selectedDate.day) {
			date = dayjs(date).set('date', parseInt(selectedDate.day))
		}

		if (selectedDate.month) {
			date = dayjs(date).set('month', yearMonths.findIndex((month) => month === selectedDate.month))
		}

		if (selectedDate.year) {
			date = dayjs(date).set('year', parseInt(selectedDate.year))
		}

		if (selectedDate?.day || selectedDate?.month || selectedDate?.year) {
			setDOB(date)
		}
	}, [selectedDate])

	return (
		<div className="flex gap-4">
			<Form.DateTypeSelector
				type="day"
				selectedItem={selectedDate?.day}
				data={[...Array.from(Array(31).keys())].map((item) => item + 1)}
				setSelectedItem={(selectedDay) => setSelectedDate({ ...selectedDate, day: selectedDay })}
			/>
			<Form.DateTypeSelector
				type="month"
				data={yearMonths}
				selectedItem={selectedDate?.month}
				setSelectedItem={(selectedMonth) => setSelectedDate({ ...selectedDate, month: selectedMonth })}
			/>
			<Form.DateTypeSelector
				type="year"
				selectedItem={selectedDate?.year}
				setSelectedItem={(selectedYear) => setSelectedDate({ ...selectedDate, year: selectedYear })}
				data={[...Array.from(new Array(100).keys())].map((item) => (currentYear - 18) - (item + 1))}
			/>
		</div>
	)
}

export default DatePeriodSelector
