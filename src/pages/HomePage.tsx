import Welcome from '../components/HomePage/Welcome'
import UpcomingEvents from '../components/HomePage/UpcomingEvents/UpcomingEvents'
import EventsForLastYears from '../components/HomePage/EventsForLastYears/EventsForLastYears'
import EventsCalendar from '../components/HomePage/EventCalendar/EventCalendarComponent'
import Partners from '../components/HomePage/Partners/Partners'
import AllEvents from '../components/HomePage/AllEvents/AllEvents'
import News from '../components/HomePage/News/NewsComponent'
import useStyles from '../components/styles/useStyle'


const HomePage = (props:{homeRef:any, upcomingRef:any,
  calendarRef:any, newsRef:any, partnersRef:any}) =>{
  
  const classes = useStyles()

  return (
    <div className={classes.homePageContainer}>
        <Welcome />
        <UpcomingEvents upcomingRef={props.upcomingRef}/>
        <EventsCalendar calendarRef={props.calendarRef}/>
        <AllEvents/>
        <News newsRef={props.newsRef}/>
        <Partners partnersRef={props.partnersRef}/>
        <EventsForLastYears/>
    </div>
  )
}


export default HomePage;
