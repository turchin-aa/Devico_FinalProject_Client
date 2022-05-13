import useStyles from '../../../theme/useStyle'
import AllEventsTable from './AllEventsTable'

const AllEvents: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.homeBlocks}>
      <div id="eventHeader">
        <h3>All Events</h3>
      </div>

      <AllEventsTable />
    </div>
  )
}

export default AllEvents
