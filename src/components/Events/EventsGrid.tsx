import moment from 'moment'
import { memo, useMemo } from 'react'
import { EventData } from '../../types/globalTypes'
import EventCard from '../EventCard/EventCard'
import { EventContainer, EventContent, GridContainer } from './GridStyles'

interface Props {
  events: EventData
}

const EventsGrid: React.FC<Props> = ({ events }) => {
  const today = useMemo(() => moment().format('YYYY-MM-DD'), [])
  return (
    <GridContainer>
      {events.map(item => {
        return (
          <EventContainer key={item.id}>
            <EventContent>
              <EventCard
                eventItem={item}
                idType="grid"
                isResentEvent={item.date < today.toString()}
              />
            </EventContent>
          </EventContainer>
        )
      })}
    </GridContainer>
  )
}

export default memo(EventsGrid)
