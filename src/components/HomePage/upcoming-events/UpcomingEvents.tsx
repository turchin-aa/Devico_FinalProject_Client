import { Divider } from '@mui/material'
import useStyles from '../../../theme/useStyle'
import ScrollableItems from '../scrollable-items/ScrollableItems'

const UpcomingEvents: React.FC = () => {
  const classes = useStyles()
  return (
    <div id="upcoming-events" className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">Upcoming events</div>
        <div id="view-all">View all</div>
      </div>
      <Divider />
      <ScrollableItems />
    </div>
  )
}

export default UpcomingEvents
