import { Divider } from '@mui/material'
import moment from 'moment'
import useStyles from '../../../theme/useStyle'
import ScrollableItems from '../scrollable-items/ScrollableItems'
import { EventData } from '../../../types/globalTypes'
import { useAppSelector } from '../../../hooks/redux.hook'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  resent: boolean
  idType: string
}

const ScrollableContainer: React.FC<Props> = ({ resent, idType }) => {
  const today = moment().format('YYYY-MM-DD')
  const navigate = useNavigate()

  const events = useAppSelector<EventData>(state => state.event.events)
  const eventData = events.filter(event => {
    if (resent) {
      return event.date < today.toString()
    } else {
      return event.date >= today.toString()
    }
  })

  const onClickHandler = useCallback(() => {
    navigate('allEvents')
  }, [])

  const classes = useStyles()
  return (
    <div id={idType} className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="title">{resent ? 'Events for the last years' : 'Upcoming events'}</div>
        <div id="view-all" onClick={onClickHandler}>
          View all
        </div>
      </div>
      <Divider />
      <ScrollableItems eventData={eventData} resent={resent} />
    </div>
  )
}

export default memo(ScrollableContainer)
