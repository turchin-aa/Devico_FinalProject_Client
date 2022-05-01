import React from 'react'

import Welcome from '../components/Welcome'
import UpcomingEvents from '../components/UpcomingEvents'
import EventsCalendar from '../components/EventCalendarComponent'
import News from '../components/NewsComponent'
import useStyles from '../components/styles/useStyle'


const HomePage = (props:{homeRef:any, upcomingRef:any,
  calendarRef:any, newsRef:any, partnersRef:any}) =>{
  
  const classes = useStyles()

  return (
    <div className={classes.homePageContainer}>
        <Welcome />
        <UpcomingEvents upcomingRef={props.upcomingRef}/>
        <EventsCalendar calendarRef={props.calendarRef}/>
        <News newsRef={props.newsRef}/>
    </div>
  )
}


export default HomePage;
