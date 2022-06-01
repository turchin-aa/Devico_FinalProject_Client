import { Button, Divider } from '@mui/material'
import clsx from 'clsx'
import moment from 'moment'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import useStyles from '../../theme/useStyle'
import { EventItem } from '../../types/globalTypes'
import { uiActions } from '../../store/ui-slice'

interface Props {
  eventItem: EventItem
  idType: string
  resent?: boolean
}

const img =
  'https://64.media.tumblr.com/1438f240f252cd35c61717e909bc39e6/2c2b030ebff2d9fa-50/s1280x1920/547f2c3c3513e545f202c513496de1c58db54c9d.png'

const EventCard: React.FC<Props> = ({ eventItem, idType, resent }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const registrated = false
  const isUserAuth = useAppSelector<boolean>(state => state.user.isAuth)
  const dispatch = useAppDispatch()

  const checkIdType = useCallback(() => {
    if (idType == 'scrollable') {
      return 'Register'
    } else if (idType == 'grid' || idType == 'page') {
      if (isUserAuth) {
        if (registrated) {
          return 'Cancel'
        }
        return 'Apply Event'
      }
      return 'Sign in to apply'
    }
  }, [])

  const handleButtonClick = useCallback(() => {
    if (isUserAuth) {
      if (registrated) {
        dispatch(uiActions.toggleShowCancelParticipation())
      } else {
        dispatch(uiActions.toggleShowEventReg())
      }
    } else {
      dispatch(uiActions.toggleLog())
    }
  }, [dispatch])

  const handleHrefClick = useCallback(() => {
    navigate(`/event/${eventItem.id}`)
  }, [navigate])

  return (
    <div
      id={idType}
      className={clsx(
        idType == 'page' ? null : classes.filterGreyScale,
        classes.event,
        classes.flexCenter,
      )}
    >
      <div id="img">
        <img src={img} alt="event img" />
        <div id={idType} className={classes.eventContent}>
          <p id="event-title">
            {resent ? 'resent event'.toUpperCase() : 'next event'.toUpperCase()}
          </p>
          <p id="event-name">{eventItem.title}</p>
          <div id="event-date">
            <p>{moment(eventItem.date).format('DD.MM.YYYY')}&nbsp; </p>
            <p id="event-place">{eventItem.place}</p>
          </div>
          <div id="event-info">
            <p id="event-discipline">Discipline: {eventItem.discipline}</p>
            <p id="event-status">Status: {eventItem.status}</p>
            <p id="event-series">Series: {eventItem.series}</p>
          </div>
          <Divider variant="middle" />
          <div id="event-footer">
            {idType == 'page' ? null : (
              <span className={classes.viewDetails} onClick={handleHrefClick}>
                View details
              </span>
            )}
            <Button
              id="event-button"
              disabled={resent || eventItem.registration == 0}
              onClick={handleButtonClick}
              variant="contained"
            >
              {checkIdType()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(EventCard)
