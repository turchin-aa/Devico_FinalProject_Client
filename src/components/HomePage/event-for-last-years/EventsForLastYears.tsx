import { Divider } from '@mui/material'
import { memo } from 'react'
import moment from 'moment'
import useStyles from '../../../theme/useStyle'
import ScrollableItems from '../scrollable-items/ScrollableItems'
import { EventData } from '../../../types/globalTypes'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const EventsForLastYears: React.FC = () => {
  const today = moment().format('YYYY-MM-DD')
  const events = useSelector<RootState, EventData>(state => state.event.events)
  const eventData = events.filter(event => event.date < today.toString())

  const classes = useStyles()
  return (
    <div className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">Events for the last years</div>
        <div id="view-all">View all</div>
      </div>

      <Divider />
      <ScrollableItems eventData={eventData} resent={true} />
    </div>
  )
}

export default memo(EventsForLastYears)
