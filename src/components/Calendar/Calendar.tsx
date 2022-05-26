import Monitor from './Monitor/Monitor'
import CalendarGrid from './CalendarGrid/CalendarGrid'
import moment from 'moment'
import { useState, useCallback, useEffect, memo } from 'react'

const Calendar: React.FC = () => {
  moment.updateLocale('en', { week: { dow: 1 } })
  const [today, setToday] = useState(moment())

  const [startMonthDay, setStartMonthDay] = useState(
    today.clone().startOf('month').startOf('week').subtract(1, 'day'),
  )

  useEffect(() => {
    // sets new start day of month to render in the CalendarGrid, after today field was modified
    setStartMonthDay(today.clone().startOf('month').startOf('week').subtract(1, 'day'))
  }, [today])

  const prevHandler = useCallback(() => {
    setToday(prev => prev.clone().subtract(1, 'month'))
  }, [])

  const nextHandler = useCallback(() => {
    setToday(next => next.clone().add(1, 'month'))
  }, [])

  return (
    <div>
      <Monitor prevHandler={prevHandler} nextHandler={nextHandler} today={today} />
      <CalendarGrid startMonthDay={startMonthDay} today={today} />
    </div>
  )
}

export default memo(Calendar)
