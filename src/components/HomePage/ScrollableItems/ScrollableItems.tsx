import {CardMedia,Divider,Button} from '@mui/material'
import useStyles from '../../styles/useStyle'
import clsx from 'clsx'
// import {Scrollbars} from 'react-custom-scrollbars'

const ScrollableItems = ()=>{
  const classes = useStyles()
  const next_event=[
    {
      title:'next event',
    name:'AUTO.RIA Race',
    date:'12.12.2021',
    place:'Kharkiv. Maidan constitution',
    img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
    discipline:'Digital motorsport',
    status:'National Seria',
    series:'National Digital Time Attack Series (NS-CTA) 2021' 
    },
    {
      title:'next event',
    name:'AUTO.RIA Race',
    date:'12.12.2021',
    place:'Kharkiv. Maidan constitution',
    img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
    discipline:'Digital motorsport',
    status:'National Seria',
    series:'National Digital Time Attack Series (NS-CTA) 2021'
      
    },
    {
      title:'next event',
    name:'AUTO.RIA Race',
    date:'12.12.2021',
    place:'Kharkiv. Maidan constitution',
    img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
    discipline:'Digital motorsport',
    status:'National Seria',
    series:'National Digital Time Attack Series (NS-CTA) 2021'
    },
    {
      title:'next event',
    name:'AUTO.RIA Race',
    date:'12.12.2021',
    place:'Kharkiv. Maidan constitution',
    img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
    discipline:'Digital motorsport',
    status:'National Seria',
    series:'National Digital Time Attack Series (NS-CTA) 2021'
    },
    {
      title:'next event',
    name:'AUTO.RIA Race',
    date:'12.12.2021',
    place:'Kharkiv. Maidan constitution',
    img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
    discipline:'Digital motorsport',
    status:'National Seria',
    series:'National Digital Time Attack Series (NS-CTA) 2021'
    },
  ]

  return(
    <div className={classes.eventContainer}>
      {/* <Scrollbars style={{width:'100%'}}></Scrollbars> */}
      {next_event.map((item,index)=>{
        return(
        <div key={index} className={clsx(classes.event, classes.filterGreyScale, classes.flexCenter)}>
          <div >
            <CardMedia sx={{height:'100%', width:'100%'}} id='img'>
              <img src={item.img} alt="event img" />
            </CardMedia> 
            <div id="event-container" className={classes.flexCenter}>
              <div id='event-wrapper'>
                  <p id='event-title'>{item.title.toUpperCase()}</p>
                  <p id='event-name'>{item.name}</p>
                  <p id='event-date'>{item.date} <span id='event-place'>{item.place}</span></p>
                  <div id='event-info'>
                    <p id='event-discipline'>Discipline: {item.discipline}</p>
                    <p id='event-status'>Status: {item.status}</p>
                    <p id='event-series'>Series: {item.series}</p>
                  </div>
                  <div id='event-div'>
                    <Divider variant='middle'/>
                  </div>
                  <div id='event-footer'>
                    <a href="#">View details</a>
                    <Button id='event-button'variant='contained' href=''>Register</Button>
                  </div>
              </div>
                
            </div>           
          </div>
        </div>
        )
      })}
    </div>

  )
}

export default ScrollableItems