import React from 'react';
import {Grid} from '@mui/material'
import {makeStyles} from '@mui/styles'

import Welcome from '../components/Welcome'
import UpcomingEvents from '../components/UpcomingEvents'
import EventsCalendar from '../components/EventCalendarComponent'
import News from '../components/NewsComponent'


const useStyles = makeStyles(theme=>({
  container:{
    display:'flex',
    flexDirection:'column'
  }
}))

const FAQ: React.FC = () =>{
  const classes = useStyles()

  return (
    <div className={classes.container}>

    faq
    </div>
  )
}


export default FAQ;
