import { Divider } from '@mui/material'
import useStyles from '../../styles/useStyle'
import ScrollableItems from '../ScrollableItems/ScrollableItems'

const EventsForLastYears = () => {
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
