import { Divider } from '@mui/material'
import moment from 'moment'
import useStyles from '../../../theme/useStyle'
import ScrollableItems from '../scrollable-items/ScrollableItems'
import { EventData } from '../../../types/globalTypes'
import { useAppSelector } from '../../../hooks/redux.hook'
import { memo, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  isResentEvent: boolean
  idType: string
}

const ScrollableContainer: React.FC<Props> = ({ isResentEvent, idType }) => {
  const today = useMemo(() => moment().format('YYYY-MM-DD'), [])
  const navigate = useNavigate()

  const events = useAppSelector<EventData>(state => state.event.events)
  const eventData = useMemo(
    () =>
      events.filter(event => {
        if (isResentEvent) {
          return event.date < today.toString()
        } else {
          return event.date >= today.toString()
        }
      }),
    [events, isResentEvent, today],
  )

  const onClickHandler = useCallback(() => {
    navigate('allEvents')
  }, [navigate])

  const classes = useStyles()
  return (
    <div id={idType} className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">{isResentEvent ? 'Events for the last years' : 'Upcoming events'}</div>
        <div id="view-all" onClick={onClickHandler}>
          View all
        </div>
      </div>
      <Divider />
      <ScrollableItems eventData={eventData} isResentEvent={isResentEvent} />
    </div>
  )
}

export default memo(ScrollableContainer)
