import moment from 'moment'
import { memo, useMemo } from 'react'
import { GridWrapper, Header, WeekDay } from '../CalendarStyled'

const setWeekArray = () => {
  return [...Array(7)].map((_, index) =>
    moment()
      .day(index + 1)
      .format('ddd'),
  )
}

const CalendarHeader: React.FC = () => {
  const week = useMemo(() => setWeekArray(), [])
  return (
    <GridWrapper>
      {week.map((item, index) => {
        return (
          <Header key={index}>
            <WeekDay>{item.toUpperCase()}</WeekDay>
          </Header>
        )
      })}
    </GridWrapper>
  )
}

export default memo(CalendarHeader)
