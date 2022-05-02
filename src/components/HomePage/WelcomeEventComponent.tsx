import {CardMedia} from '@mui/material'
import useStyles from '../styles/useStyle'

const WelcomeEvent =()=>{
  const classes = useStyles()
  const next_event={
    title:'next event',
    name:'AUTO.RIA Race',
    date:'12.12.2021',
    place:'Kharkiv. Maidan constitution',
  }
  const img:string = 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'
  return(
    <div >
          <CardMedia sx={{width:650, height: 480 }} component='img' src={img} />
          <div className={classes.welcomeEventContainer}>
            <div><p>{next_event.title.toUpperCase()}</p></div>
            <p id='event-name'>{next_event.name}</p>
            <p id='event-date'>{next_event.date}</p>
            <p id='event-place'>{next_event.place}</p>
            <a href="#">View details</a>
          </div>
    </div>
  )
}
export default WelcomeEvent