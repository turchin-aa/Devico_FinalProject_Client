import { useCalendarStyles } from '../useCalenadrStyles'
import { CalendarCell, Day, GridWrapper, CalendarWrapper } from '../CalendarStyled'
import moment, { Moment } from 'moment'
import EventsBlocks from './EventsBlocks'
import EventsList from './EventsList'
import { useMemo, useCallback, memo } from 'react'
import CalendarHeader from './CalendarHeader'

interface Props {
  startMonthDay: Moment
  today: Moment
}

const setDaysArray = (day: Moment) => {
  return [...Array(42)].map(() => day.add(1, 'day').clone())
}

const CalendarGrid: React.FC<Props> = ({ startMonthDay, today }) => {
  //I'll delete this after events implemented
  const eventsCount = 3

  const classes = useCalendarStyles()
  const day = startMonthDay.clone()
  const daysArray = setDaysArray(day)

  // helps to mark current day in the calendar
  const current = useMemo(() => moment().format('DDMMYYYY'), [])

  const getIsSelectedMoth = useCallback(
    day => {
      return moment(today).isSame(day, 'month')
    },
    [day],
  )

  return (
    <CalendarWrapper>
      <CalendarHeader />
      <GridWrapper>
        {daysArray.map(dayItem => {
          return (
            <CalendarCell
              key={dayItem.unix()}
              isWeekEnd={dayItem.day() === 6 || dayItem.day() === 0}
              isSelectedMoth={getIsSelectedMoth(dayItem)}
            >
              <div className={classes.rowInCell}>
                <Day
                  className={classes.flexCenter}
                  current={current === dayItem.format('DDMMYYYY')}
                >
                  {dayItem.format('D')}
                </Day>
              </div>
              <div className={classes.calendarEventWrapper}>
                {/* there(???) need's to be fetch of events where date is in format (DMMYYYY). 
                    data needs to be pusshed to an array and then eventsArray.length is checked.
                    if length <= 2 then we map separate eventBlocks to calendar,
                    if length > 2 - we're heading to EventsList so there will be one eventBlock 
                    with a dropdown list of events for a day
                */}
                {/* or we'll fetch data to an array */}

                {eventsCount <= 2 ? <EventsBlocks /> : <EventsList />}
              </div>
            </CalendarCell>
          )
        })}
      </GridWrapper>
    </CalendarWrapper>
  )
}

export default memo(CalendarGrid)
