import Welcome from '../components/HomePage/welcome/Welcome'
import UpcomingEvents from '../components/HomePage/upcoming-events/UpcomingEvents'
import EventsForLastYears from '../components/HomePage/event-for-last-years/EventsForLastYears'
import EventsCalendar from '../components/HomePage/event-calendar/EventCalendarComponent'
import Partners from '../components/HomePage/partners/Partners'
import AllEvents from '../components/HomePage/all-events/AllEvents'
import News from '../components/HomePage/news/News'
import useStyles from '../theme/useStyle'
import { memo } from 'react'
import { RootState } from '../store/index'
import { useSelector } from 'react-redux'

const HomePage: React.FC = () => {
  const classes = useStyles()
  const isUserAuth = useSelector<RootState, boolean>(state => state.user.isAuth)

  return (
    <div className={classes.homePageContainer}>
      {isUserAuth ? null : <Welcome />}
      <UpcomingEvents />
      <EventsCalendar />
      <AllEvents />
      <News />
      <Partners />
      <EventsForLastYears />
    </div>
  )
}

export default memo(HomePage)
