import {forwardRef} from 'react'
import {Divider} from '@mui/material'
import useStyles from '../../styles/useStyle'
import ScrollableItems from '../ScrollableItems/ScrollableItems'

const UpcomingEvents = forwardRef((props:{upcomingRef:any}) =>{
  const classes = useStyles()
  return(
    <div ref={props.upcomingRef} className={classes.homeBlocks}>
      <div id='upcoming-title'>
        <h2 className={classes.notifHText}>Upcoming events</h2>
        <div className={classes.notifHText}><span>View all</span></div>
      </div>
      <Divider/> 
      <ScrollableItems/>
    </div>
  )
})

export default UpcomingEvents
