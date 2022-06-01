import { memo } from 'react'
import BackButton from '../BackArrowButton/BackButton'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux.hook'
import { EventData } from '../../types/globalTypes'
import EventCard from '../EventCard/EventCard'
import {
  EventDetailsContainer,
  EventInfoContainer,
  EventPageContainer,
  ParticipantsButton,
  useStyles,
} from './EventPageStyles'

const EventPage: React.FC = () => {
  const { id } = useParams()
  const classes = useStyles()
  const events = useAppSelector<EventData>(state => state.event.events)
  const eventItem = events.filter(event => {
    return event.id == id
  })

  return (
    <div className={classes.eventPageContainer}>
      <BackButton idType="page">
        <></>
      </BackButton>
      <div className={classes.eventPageCardContainer}>
        <div className={classes.eventPageCard}>
          <EventCard eventItem={eventItem[0]} idType={'page'} />
        </div>
      </div>

      <div className={classes.eventDetailsContainer}>
        <EventPageContainer>
          <EventInfoContainer>
            <div id="title-wrapper">
              <div id="title">Event info</div>
              <div>pending</div>
            </div>

            <div className={classes.eventInfo}>{eventItem[0]?.eventInfo}</div>
            <div className={classes.eventPageButton}>
              <ParticipantsButton>view participants</ParticipantsButton>
            </div>
          </EventInfoContainer>

          <EventDetailsContainer>
            <div id="title"> Event details</div>
            <div className={classes.eventInfo}>details</div>
          </EventDetailsContainer>
        </EventPageContainer>
      </div>
    </div>
  )
}
export default memo(EventPage)
