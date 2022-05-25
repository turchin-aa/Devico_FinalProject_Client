import { memo } from 'react'
import useWelcomeStyles from './useWelcomeStyles'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { EventData } from '../../../types/globalTypes'

const img =
  'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'

const WelcomeEvent: React.FC = () => {
  const classes = useWelcomeStyles()
  const today = moment().format('YYYY-MM-DD')

  const events = useSelector<RootState, EventData>(state => state.event.events)

  const nextEvent = events.filter(event => event.date >= today)

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
          <p id="event-name">{nextEvent[0]?.title}</p>
          <p id="event-date">{nextEvent[0]?.date}</p>
          <p id="event-place">{nextEvent[0]?.place}</p>
          <a href="#">View details</a>
        </div>
      </div>
    </div>
  )
}
export default memo(WelcomeEvent)
