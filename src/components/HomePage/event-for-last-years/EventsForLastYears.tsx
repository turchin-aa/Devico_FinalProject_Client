import { Divider } from '@mui/material'
import useStyles from '../../../theme/useStyle'
import ScrollableItems from '../scrollable-items/ScrollableItems'

const EventsForLastYears: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">Events for the last years</div>
        <div id="view-all">View all</div>
      </div>

      <Divider />
      <ScrollableItems />
    </div>
  )
}

export default EventsForLastYears
