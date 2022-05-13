import clsx from 'clsx'
import { memo, useCallback, useState } from 'react'
import { CalendarEvent, EventsNumber } from '../CalendarStyled'
import { useCalendarStyles } from '../useCalenadrStyles'
import CalendarDropDown from './CalendarDropDown'

const EventsList: React.FC = () => {
  const classes = useCalendarStyles()
  const [open, setOpen] = useState(false)

  const handleClick = useCallback(() => setOpen(!open), [open])
  const arrowOpen = useCallback(() => {
    return open ? classes.eventButtonArrow : ''
  }, [open])

  return (
    <div>
      <div>
        <CalendarEvent className={classes.eventsButton} onClick={handleClick}>
          <span className={clsx(arrowOpen())}>&#8600;</span> EVENTS
        </CalendarEvent>
        <EventsNumber>4</EventsNumber>
      </div>
      {open ? <CalendarDropDown /> : null}
    </div>
  )
}

export default memo(EventsList)
