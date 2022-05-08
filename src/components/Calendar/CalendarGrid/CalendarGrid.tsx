import useStyles from '../../styles/useStyle'
import { CalendarCell, Day, GridWrapper } from '../../styles/styledComponent'
import moment from 'moment'

const CalendarGrid = (props: { startDay; today }) => {
  const day = props.startDay.clone()

  const classes = useStyles()
  const totalDays: number = 42
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
  const weekArray = [...Array(7)].map(() => day.day(1, 'day').clone())

  const isSelectedMoth = day => {
    return moment(props.today).isSame(day, 'month')
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
