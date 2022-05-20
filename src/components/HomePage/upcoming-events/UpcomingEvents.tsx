import { Divider } from '@mui/material'
import moment from 'moment'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import useStyles from '../../../theme/useStyle'
import { EventData } from '../../../types/globalTypes'
import ScrollableItems from '../scrollable-items/ScrollableItems'

const UpcomingEvents: React.FC = () => {
  const today = moment().format('YYYY-MM-DD')
  const events = useSelector<RootState, EventData>(state => state.event.events)
  const eventData = events.filter(event => event.date >= today.toString())

  const classes = useStyles()
  return (
    <div id="upcoming-events" className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">Upcoming events</div>
        <div id="view-all">View all</div>
      </div>
      <Divider />
      <ScrollableItems eventData={eventData} resent={false} />
    </div>
  )
}

export default memo(UpcomingEvents)
