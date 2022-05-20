import { memo } from 'react'
import { CalendarEvent } from '../CalendarStyled'
import { EventData } from '../../../types/globalTypes'

interface Props {
  result: EventData
}

const EventsBlocks: React.FC<Props> = ({ result }) => {
  return (
    <div>
      {result.map((item, index) => {
        return <CalendarEvent key={index}> {item.title}</CalendarEvent>
      })}
    </div>
  )
}

export default memo(EventsBlocks)
