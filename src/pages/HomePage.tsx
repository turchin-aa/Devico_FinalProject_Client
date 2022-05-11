import Welcome from '../components/HomePage/Welcome'
import UpcomingEvents from '../components/HomePage/UpcomingEvents/UpcomingEvents'
import EventsForLastYears from '../components/HomePage/EventsForLastYears/EventsForLastYears'
import EventsCalendar from '../components/HomePage/EventCalendar/EventCalendarComponent'
import Partners from '../components/HomePage/Partners/Partners'
import AllEvents from '../components/HomePage/AllEvents/AllEvents'
import News from '../components/HomePage/News/News'
import useStyles from '../components/styles/useStyle'
import { memo, RefObject } from 'react'
import { RootState } from '../store/index'
import { useSelector } from 'react-redux'

interface BlockRef {
  upcomingRef: RefObject<HTMLDivElement>
  calendarRef: RefObject<HTMLDivElement>
  newsRef: RefObject<HTMLDivElement>
  partnersRef: RefObject<HTMLDivElement>
}

const HomePage: React.FC<BlockRef> = ({ upcomingRef, calendarRef, newsRef, partnersRef }) => {
  const classes = useStyles()
  const isUserAuth = useSelector<RootState, boolean>(state => state.ui.isUserAuth)

  return (
    <div className={classes.homePageContainer}>
      {isUserAuth ? null : <Welcome />}
      <UpcomingEvents upcomingRef={upcomingRef} />
      <EventsCalendar calendarRef={calendarRef} />
      <AllEvents />
      <News newsRef={newsRef} />
      <Partners partnersRef={partnersRef} />
      <EventsForLastYears />
    </div>
  )
}

export default memo(HomePage)
