import { memo } from 'react'
import { EventData } from '../../../types/globalTypes'
import { CalendarEvent, CalendarList } from '../CalendarStyled'

interface Props {
  result: EventData
}

const CalendarDropDown: React.FC<Props> = ({ result }) => {
  return (
    <CalendarList>
      {result.map((item, index) => {
        return <CalendarEvent key={index}>{item.title}</CalendarEvent>
      })}
    </CalendarList>
  )
}

export default memo(CalendarDropDown)
