import { memo } from 'react'
import BackButton from '../BackArrowButton/BackButton'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux.hook'
import { EventData } from '../../types/globalTypes'
import EventCard from '../EventCard/EventCard'

const EventPage: React.FC = () => {
  const { id } = useParams()
  const events = useAppSelector<EventData>(state => state.event.events)
  const eventItem = events.filter(event => {
    return event.id == id
  })

  return (
    <div>
      <BackButton>
        <div></div>
      </BackButton>
      <EventCard eventItem={eventItem[0]} idType={'page'} />
      <div>
        Event info
        <div>info</div>
      </div>
    </div>
  )
}
export default memo(EventPage)
