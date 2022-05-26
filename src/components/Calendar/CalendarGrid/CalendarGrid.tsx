import { useCalendarStyles } from '../useCalenadrStyles'
import { CalendarCell, Day, GridWrapper, CalendarWrapper } from '../CalendarStyled'
import moment, { Moment } from 'moment'
import EventsBlocks from './EventsBlocks'
import EventsList from './EventsList'
import { useMemo, useCallback, memo } from 'react'
import CalendarHeader from './CalendarHeader'
import { useAppSelector } from '../../../hooks/redux.hook'
import { EventData } from '../../../types/globalTypes'

interface Props {
  startMonthDay: Moment
  today: Moment
}

const setDaysArray = (day: Moment) => {
  return [...Array(42)].map(() => day.add(1, 'day').clone())
}

const filterEvents = (result, events: EventData, day: string) => {
  result = events.filter(event => event.date == day)
  return result.length <= 2 ? <EventsBlocks result={result} /> : <EventsList result={result} />
}

const CalendarGrid: React.FC<Props> = ({ startMonthDay, today }) => {
  const result = []
  const classes = useCalendarStyles()
  const day = startMonthDay.clone()
  const daysArray = setDaysArray(day)
  const events = useAppSelector<EventData>(state => state.event.events)

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
                {filterEvents(result, events, dayItem.format('YYYY-MM-DD').toString())}
              </div>
            </CalendarCell>
          )
        })}
      </GridWrapper>
    </CalendarWrapper>
  )
}

export default memo(CalendarGrid)
