import moment from 'moment'
import { memo } from 'react'
import { EventData } from '../../types/globalTypes'
import EventCard from '../EventCard/EventCard'
import { EventContainer, EventContent, GridContainer } from './GridStyles'

interface Props {
  events: EventData
}

const EventsGrid: React.FC<Props> = ({ events }) => {
  const today = moment().format('YYYY-MM-DD')
  return (
    <GridContainer>
      {events.map((item, index) => {
        return (
          <EventContainer key={index}>
            <EventContent>
              <EventCard eventItem={item} idType="grid" resent={item.date < today.toString()} />
            </EventContent>
          </EventContainer>
        )
      })}
    </GridContainer>
  )
}

export default memo(EventsGrid)
