import { forwardRef } from 'react'
import { Calendar } from '../../Calendar/Calendar'
import { FullAppCalendar } from './FullCalendar'
import useStyles from '../../styles/useStyle'

const EventsCalendar = forwardRef((props: { calendarRef: any }) => {
  const classes = useStyles()
  return (
    <div ref={props.calendarRef} className={classes.homeBlocks}>
      <div className={classes.eventHeader}>
        <h2>Events calendar</h2>
      </div>

      <div>
        <Calendar />
        <FullAppCalendar />
      </div>
    </div>
  )
})

export default EventsCalendar
