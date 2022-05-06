import { Header } from './Header/Header'
import { Monitor } from './Monitor/Monitor'
import { CalendarGrid } from './CalendarGrid/CalendarGrid'
import moment from 'moment'
import { useState, useCallback } from 'react'

const Calendar = () => {
  moment.updateLocale('en', { week: { dow: 1 } })
  const startDay = moment().startOf('month').startOf('week').subtract(1, 'day')
  const endDay = moment().endOf('month').endOf('week').subtract(1, 'day')

  const [today, setToday] = useState(moment())

  const startDateQuery = startDay.clone().format('X')
  const endDateQuery = endDay.clone().format('X')

  const prevHandler = useCallback(() => {
    setToday((prev) => prev.clone().subtract(1, 'month'))
  }, [])
  const nextHandler = useCallback(() => {
    setToday((next) => next.clone().add(1, 'month'))
  }, [])

  const events = [
    { id: 1, title: 'Race 1', description: '', date: 1651830176 },
    { id: 2, title: 'Race 2', description: '', date: 1651916576 },
    { id: 3, title: 'Race 3', description: '', date: 1651657376 },
  ]

  return (
    <div>
      <Header />
      <Monitor
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        today={today}
      />
      <CalendarGrid startDay={startDay} today={today.format('DDMMYYYY')} />
    </div>
  )
}

export { Calendar }
