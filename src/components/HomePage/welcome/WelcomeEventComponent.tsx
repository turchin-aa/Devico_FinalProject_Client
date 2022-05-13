import { memo } from 'react'
import useWelcomeStyles from './useWelcomeStyles'

const WelcomeEvent = () => {
  const classes = useWelcomeStyles()
  const next_event = {
    title: 'next event',
    name: 'AUTO.RIA Race',
    date: '12.12.2021',
    place: 'Kharkiv. Maidan constitution',
    img: 'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png',
  }
  return (
    <div>
      <div className={classes.flexCenter}>
        <div className={classes.eventImg}>
          <img src={next_event.img} alt="event img" />
        </div>
      </div>
      <div className={classes.flexCenter}>
        <div className={classes.welcomeEventContainer}>
          <div>
            <p>{next_event.title.toUpperCase()}</p>
          </div>
          <p id="event-name">{next_event.name}</p>
          <p id="event-date">{next_event.date}</p>
          <p id="event-place">{next_event.place}</p>
          <a href="#">View details</a>
        </div>
      </div>
    </div>
  )
}
export default memo(WelcomeEvent)
