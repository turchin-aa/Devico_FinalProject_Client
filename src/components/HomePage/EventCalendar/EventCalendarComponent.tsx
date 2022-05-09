import { forwardRef, RefObject } from 'react'
import { Calendar } from '../../Calendar/Calendar'
import useStyles from '../../styles/useStyle'

interface RefType {
  calendarRef: RefObject<HTMLDivElement>
}

const EventsCalendar = forwardRef(({ calendarRef }: RefType) => {
  const classes = useStyles()
  return (
    <div ref={calendarRef} className={classes.homeBlocks}>
      <div className={classes.eventHeader}>
        <h2>Events calendar</h2>
      </div>

      <div>
        <Calendar />
      </div>
    </div>
  )
})

export default EventsCalendar
