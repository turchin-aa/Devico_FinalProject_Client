import useStyles from '../../styles/useStyle'
import AllEventsTable from './AllEventsTable'



const AllEvents: React.FC = () =>{
  const classes = useStyles()
  return(
    <div className={classes.homeBlocks}>
      <div className={classes.eventHeader}>
        <h3>All Events</h3>
      </div>

      <AllEventsTable/>
    </div>
  )
}

export default AllEvents