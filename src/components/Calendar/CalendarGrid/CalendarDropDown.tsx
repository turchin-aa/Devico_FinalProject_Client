import clsx from 'clsx'
import { memo } from 'react'
import { CalendarEvent, CalendarList, EventsNumber } from '../CalendarStyled'
import { useCalendarStyles } from '../useCalenadrStyles'

const CalendarDropDown: React.FC = () => {
  return (
    <CalendarList>
      <CalendarEvent>some event</CalendarEvent>
      <CalendarEvent>some event</CalendarEvent>
    </CalendarList>
  )
}

export default memo(CalendarDropDown)
