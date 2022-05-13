import Welcome from '../components/home-page/welcome/Welcome'
import UpcomingEvents from '../components/home-page/upcoming-events/UpcomingEvents'
import EventsForLastYears from '../components/home-page/event-for-last-years/EventsForLastYears'
import EventsCalendar from '../components/home-page/event-calendar/EventCalendarComponent'
import Partners from '../components/home-page/partners/Partners'
import AllEvents from '../components/home-page/all-events/AllEvents'
import News from '../components/home-page/news/News'
import useStyles from '../theme/useStyle'
import { memo } from 'react'
import { RootState } from '../store/index'
import { useSelector } from 'react-redux'

const HomePage: React.FC = () => {
  const classes = useStyles()
  const isUserAuth = useSelector<RootState, boolean>(state => state.ui.isUserAuth)

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
