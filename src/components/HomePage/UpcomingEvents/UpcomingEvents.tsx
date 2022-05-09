import { forwardRef, RefObject } from 'react'
import { Divider } from '@mui/material'
import useStyles from '../../styles/useStyle'
import ScrollableItems from '../ScrollableItems/ScrollableItems'

interface RefType {
  upcomingRef: RefObject<HTMLDivElement>
}

const UpcomingEvents = forwardRef(({ upcomingRef }: RefType) => {
  const classes = useStyles()
  return (
    <div ref={upcomingRef} className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">Upcoming events</div>
        <div id="view-all">View all</div>
      </div>
      <Divider />
      <ScrollableItems />
    </div>
  )
})

export default UpcomingEvents
