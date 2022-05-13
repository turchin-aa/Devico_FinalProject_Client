import Calendar from '../../Calendar/Calendar'
import useStyles from '../../../theme/useStyle'
import { memo } from 'react'

const EventsCalendar: React.FC = () => {
  const classes = useStyles()
  return (
    <div id="events-calendar" className={classes.homeBlocks}>
      <div id="eventHeader">
        <h2>Events calendar</h2>
      </div>

      <div>
        <Calendar />
      </div>
    </div>
  )
}

export default memo(EventsCalendar)
