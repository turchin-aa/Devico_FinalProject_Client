import Welcome from '../components/HomePage/welcome/Welcome'
import UpcomingEvents from '../components/HomePage/UpcomingEvents/UpcomingEvents'
import EventsForLastYears from '../components/HomePage/EventsForLastYears/EventsForLastYears'
import EventsCalendar from '../components/HomePage/EventCalendar/EventCalendarComponent'
import Partners from '../components/HomePage/Partners/Partners'
import AllEvents from '../components/HomePage/AllEvents/AllEvents'
import News from '../components/HomePage/News/News'
import useStyles from '../components/styles/useStyle'
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
