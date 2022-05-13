import { memo } from 'react'
import { CalendarEvent, CalendarList } from '../CalendarStyled'

const CalendarDropDown: React.FC = () => {
  return (
    <CalendarList>
      <CalendarEvent>some event</CalendarEvent>
      <CalendarEvent>some event</CalendarEvent>
      <CalendarEvent>some event</CalendarEvent>
      <CalendarEvent>some event</CalendarEvent>
    </CalendarList>
  )
}

export default memo(CalendarDropDown)
