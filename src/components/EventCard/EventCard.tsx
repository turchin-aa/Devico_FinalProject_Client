import { Button, Divider } from '@mui/material'
import clsx from 'clsx'
import moment from 'moment'
import { memo, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import useStyles from '../../theme/useStyle'
import { EventItem } from '../../types/globalTypes'
import { uiActions } from '../../store/ui-slice'
import { eventActions } from '../../store/saga-actions'
import { IEventParticipation } from '../../store/user-slice'

interface Props {
  eventItem: EventItem
  idType: string
  isResentEvent?: boolean
}

enum eventCardEnum {
  scrollable = 'scrollable',
  grid = 'grid',
  page = 'page',
  registrationIsOn = 1,
  registrationIsOff = 0,
}

const img =
  'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'

const EventCard: React.FC<Props> = ({ eventItem, idType, isResentEvent }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const isUserAuth = useAppSelector<boolean>(state => state.user.isAuth)
  const registratedEvents = useAppSelector<IEventParticipation[]>(
    state => state.user.eventParticipationList,
  )
  const currentEvent = useMemo(
    () => registratedEvents?.filter(event => event.eventId.toString() == eventItem.id),
    [eventItem.id, registratedEvents],
  )
  const dispatch = useAppDispatch()
  const eventCardID = useMemo(() => {
    if (idType === eventCardEnum.scrollable) {
      if (isUserAuth) {
        if (currentEvent.length > 0) {
          return 'Cancel'
        }
      }
      return 'Register'
    }
    if (idType === eventCardEnum.grid || idType === eventCardEnum.page) {
      if (isUserAuth) {
        if (currentEvent.length > 0) {
          return 'Cancel'
        }
        return 'Apply Event'
      }
      return 'Sign in to apply'
    }
  }, [idType, isUserAuth, currentEvent])

  const handleButtonClick = useCallback(() => {
    if (isUserAuth) {
      dispatch({ type: eventActions.EVENT_SET_ID_SAGA, payload: { eventItem } })
      if (currentEvent.length > 0) {
        dispatch(uiActions.toggleShowCancelParticipation())
      } else {
        dispatch(uiActions.toggleShowEventReg())
      }
    } else {
      dispatch(uiActions.toggleLog())
    }
  }, [isUserAuth, dispatch, eventItem, currentEvent.length])

  const handleHrefClick = useCallback(() => {
    navigate(`/event/${eventItem.id}`)
  }, [])

  return (
    <div
      id={idType}
      className={clsx(
        idType === eventCardEnum.page ? null : classes.filterGreyScale,
        classes.event,
        classes.flexCenter,
      )}
    >
      <div id="img">
        <img src={img} alt="event img" />
        <div id={idType} className={classes.eventContent}>
          <p id="event-title">
            {isResentEvent ? 'resent event'.toUpperCase() : 'next event'.toUpperCase()}
          </p>
          <p id="event-name">{eventItem.title}</p>
          <div id="event-date">
            <p>{moment(eventItem.date).format('DD.MM.YYYY')}&nbsp; </p>
            <p id="event-place">{eventItem.place}</p>
          </div>
          <div id="event-info">
            <p>Discipline: {eventItem.discipline}</p>
            <p>Status: {eventItem.status}</p>
            <p>Series: {eventItem.series}</p>
          </div>
          <Divider variant="middle" />
          <div id="event-footer">
            {idType === eventCardEnum.page ? null : (
              <span className={classes.viewDetails} onClick={handleHrefClick}>
                View details
              </span>
            )}
            <Button
              id="event-button"
              disabled={isResentEvent || eventItem.registration === eventCardEnum.registrationIsOff}
              onClick={handleButtonClick}
              variant="contained"
            >
              {eventCardID}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(EventCard)
