import clsx from 'clsx'
import { memo } from 'react'
import BackButton from '../components/BackArrowButton/BackButton'
import EventsGrid from '../components/Events/EventsGrid'
import useStyles from '../theme/useStyle'
import { useAppSelector } from '../hooks/redux.hook'
import { EventData } from '../types/globalTypes'
import moment from 'moment'

const AllEvents: React.FC = () => {
  const classes = useStyles()
  const events = useAppSelector<EventData>(state => state.event.events)
  const today = moment().format('YYYY-MM-DD')

  return (
    <div className={clsx(classes.allEventsGridContainer, classes.mainPageMargin)}>
      <BackButton>
        <span>All events</span>
      </BackButton>
      <div></div>
      <EventsGrid events={events} />
    </div>
  )
}

export default memo(AllEvents)
