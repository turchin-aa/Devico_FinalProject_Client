import React from 'react';
import {Grid} from '@mui/material'
import {makeStyles} from '@mui/styles'
import SideBar from '../components/SideBar'
import Welcome from '../components/Welcome'
import UpcomingEvents from '../components/UpcomingEvents'
import EventsCalendar from '../components/EventCalendarComponent'
import News from '../components/NewsComponent'

const useStyle = makeStyles(theme=>({
 
}))

const HomePage: React.FC = () =>{
  const classes = useStyle()

  return (
    <>
    
    
    <Grid container spacing={3}>
      <Grid item xs={1} md={2} sm={1}>
         <SideBar/>
      </Grid>
      <Grid item xs={11} md={10} sm={11}>
        <Welcome />
        <UpcomingEvents />
        <EventsCalendar />
        <News />
      </Grid>

    </Grid>

    </>
  )
}


export default HomePage;
