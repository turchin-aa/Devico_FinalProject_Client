import {Divider} from '@mui/material'
import useStyles from '../../styles/useStyle'
import ScrollableItems from '../ScrollableItems/ScrollableItems'

const EventsForLastYears = () =>{
  const classes = useStyles()
  return(
    <div className={classes.homeBlocks}>
      <div id='events-for-last-years'>
        <h2 className={classes.notifHText}>Events for the last years</h2>
        <div className={classes.notifHText}><span>View all</span></div>
      </div>
      <Divider/> 
      <ScrollableItems/>
    </div>
  )
}

export default EventsForLastYears