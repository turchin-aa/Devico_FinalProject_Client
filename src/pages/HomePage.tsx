import React from 'react';
import {Grid} from '@mui/material'
import {makeStyles} from '@mui/styles'

import Welcome from '../components/Welcome'
import UpcomingEvents from '../components/UpcomingEvents'
import EventsCalendar from '../components/EventCalendarComponent'
import News from '../components/NewsComponent'
import useStyles from '../components/styles/useStyle'


const HomePage: React.FC = ({upcomingRef, calendarRef, newsRef, partnersRef}) =>{
  const classes = useStyles()

  return (
    <div className={classes.homePageContainer}>
      <Welcome />
      <UpcomingEvents upcomingRef={upcomingRef}/>
      <EventsCalendar />
      <News />
    </div>
  )
}


export default HomePage;
