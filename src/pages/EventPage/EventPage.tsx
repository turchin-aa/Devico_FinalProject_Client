import { memo, useMemo } from 'react'
import BackButton from '../../components/BackArrowButton/BackButton'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux.hook'
import { EventData } from '../../types/globalTypes'
import EventCard from '../../components/EventCard/EventCard'
import {
  EventDetailsContainer,
  EventInfoContainer,
  EventPageContainer,
  ParticipantsButton,
  useStyles,
} from './EventPageStyles'
import { CheckCircleOutline } from '@mui/icons-material'
import moment from 'moment'

const EventPage: React.FC = () => {
  const { id } = useParams()
  const classes = useStyles()
  const today = useMemo(() => moment().format('YYYY-MM-DD'), [])
  const events = useAppSelector<EventData>(state => state.event.events)
  const eventItem = events.filter(event => event.id == id)

  return (
    <div className={classes.eventPageContainer}>
      <BackButton idType="page" />
      <div className={classes.eventPageCardContainer}>
        <div className={classes.eventPageCard}>
          <EventCard
            eventItem={eventItem[0]}
            isResentEvent={eventItem[0]?.date < today.toString()}
            idType={'page'}
          />
        </div>
      </div>

      <div className={classes.eventDetailsContainer}>
        <EventPageContainer>
          <EventInfoContainer>
            <div id="title-wrapper">
              <div id="title">Event info</div>
              <div id="status">pending</div>
            </div>

            <div className={classes.eventInfo}>{eventItem[0]?.eventInfo}</div>
            <div className={classes.eventPageButton}>
              <ParticipantsButton>view participants</ParticipantsButton>
            </div>
          </EventInfoContainer>

          <EventDetailsContainer>
            <div id="title"> Event details</div>
            <div className={classes.eventInfoContainer}>
              <div className={classes.eventInfo}>
                <CheckCircleOutline color="primary" className={classes.checkMark} />
                <span>Cost of participation: {eventItem[0]?.costOfParticipation}</span>
              </div>
              <div className={classes.eventInfo}>
                <CheckCircleOutline color="primary" className={classes.checkMark} />
                <span>Discipline: {eventItem[0]?.discipline}</span>
              </div>
              <div className={classes.eventInfo}>
                <CheckCircleOutline color="primary" className={classes.checkMark} />
                <span>Status: {eventItem[0]?.status}</span>
              </div>
              <div className={classes.eventInfo}>
                <CheckCircleOutline color="primary" className={classes.checkMark} />
                <span>Series: {eventItem[0]?.series}</span>
              </div>
            </div>
          </EventDetailsContainer>
        </EventPageContainer>
      </div>
    </div>
  )
}
export default memo(EventPage)
