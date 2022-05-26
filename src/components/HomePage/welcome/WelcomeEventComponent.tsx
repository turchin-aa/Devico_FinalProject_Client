import { memo, useEffect } from 'react'
import useWelcomeStyles from './useWelcomeStyles'
import moment from 'moment'
import { useAppSelector } from '../../../hooks/redux.hook'
import { EventData } from '../../../types/globalTypes'

const img =
  'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'

const createData = (date: string, title: string, place: string) => {
  return { date, title, place }
}

const WelcomeEvent: React.FC = () => {
  const classes = useWelcomeStyles()
  const today = moment().format('YYYY-MM-DD')

  const events = useAppSelector<EventData>(state => state.event.events)

  const nextEvent = {
    date: '22.05.2022',
    title: 'AUTO.Ria Race',
    place: 'Kharkiv. Freedom square',
  }

  return (
    <div>
      <div className={classes.flexCenter}>
        <div className={classes.eventImg}>
          <img src={img} alt="event img" />
        </div>
      </div>
      <div className={classes.flexCenter}>
        <div className={classes.welcomeEventContainer}>
          <div>
            <p>{'next event'.toUpperCase()}</p>
          </div>
          <p id="event-name">{nextEvent.title}</p>
          <p id="event-date">{nextEvent.date}</p>
          <p id="event-place">{nextEvent.place}</p>
          <a href="#">View details</a>
        </div>
      </div>
    </div>
  )
}
export default memo(WelcomeEvent)
