import useStyles from '../../styles/useStyle'
import { CalendarCell, Day, GridWrapper } from '../CalendarStyled'
import moment, { Moment } from 'moment'

interface CalendarGridTypes {
  startDay: Moment
  today: Moment
}

const CalendarGrid = ({ startDay, today }: CalendarGridTypes) => {
  const day = startDay.clone()

  const classes = useStyles()
  const totalDays: number = 42
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())

  const isSelectedMoth = day => {
    return moment(today).isSame(day, 'month')
  }

  return (
    <div className={classes.calendarWrap}>
      <GridWrapper>
        {[...Array(7)].map((_, index) => {
          return (
            <CalendarCell key={index} isWeekEnd={index === 5 || index === 6}>
              <div className={classes.rowInCell}>
                {moment()
                  .day(index + 1)
                  .format('ddd')}
              </div>
            </CalendarCell>
          )
        })}
      </GridWrapper>
      <GridWrapper>
        {daysArray.map(dayItem => {
          return (
            <CalendarCell
              key={dayItem.unix()}
              isWeekEnd={dayItem.day() === 6 || dayItem.day() === 0}
              isSelectedMoth={isSelectedMoth(dayItem)}
            >
              <div className={classes.rowInCell}>
                <Day
                  className={classes.flexCenter}
                  current={moment().format('DDMMYYYY') === dayItem.format('DDMMYYYY')}
                >
                  {dayItem.format('D')}
                </Day>
              </div>
            </CalendarCell>
          )
        })}
      </GridWrapper>
    </div>
  )
}

export { CalendarGrid }
