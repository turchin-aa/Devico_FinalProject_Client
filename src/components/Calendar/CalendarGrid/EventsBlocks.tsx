import { memo } from 'react'
import { CalendarEvent } from '../CalendarStyled'

const EventsBlocks: React.FC = () => {
  return (
    <div>
      <CalendarEvent> some event</CalendarEvent>
    </div>
  )
}

export default memo(EventsBlocks)
