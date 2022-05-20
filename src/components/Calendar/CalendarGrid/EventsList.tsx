import clsx from 'clsx'
import { memo, useCallback, useState } from 'react'
import { EventData } from '../../../types/globalTypes'
import { CalendarEvent, EventsNumber } from '../CalendarStyled'
import { useCalendarStyles } from '../useCalenadrStyles'
import CalendarDropDown from './CalendarDropDown'

interface Props {
  result: EventData
}

const EventsList: React.FC<Props> = ({ result }) => {
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
          <span id="arrow" className={clsx(arrowOpen())}>
            &#8600;
          </span>
          <span id="title"> EVENTS</span>
        </CalendarEvent>
        <EventsNumber>{result.length}</EventsNumber>
      </div>
      {open ? <CalendarDropDown result={result} /> : null}
    </div>
  )
}

export default memo(EventsList)
