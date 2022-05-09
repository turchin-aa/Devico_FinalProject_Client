import DynamicIcon from '../../DynamicIcon'
import useStyles from '../../styles/useStyle'
import { FilterAlt } from '@mui/icons-material'
import { Button } from '@mui/material'
import clsx from 'clsx'
import { Moment } from 'moment'

interface MonitorTypes {
  prevHandler: () => void
  nextHandler: () => void
  today: Moment
}

const Monitor = ({ prevHandler, nextHandler, today }: MonitorTypes) => {
  const classes = useStyles()
  return (
    <div className={classes.calendarHeader}>
      <div className={clsx(classes.flexCenter)}>
        <span id="month">{today.format('MMMM')} </span>
        <span>{today.format('YYYY')}</span>
        <div className={clsx(classes.flexCenter, 'filter')}>
          <FilterAlt fontSize="small" />
          Filter
        </div>
      </div>

      <div>
        <Button variant="outlined" href="" onClick={prevHandler}>
          <DynamicIcon iconName="ArrowBackIos" className="" />
        </Button>
        <Button variant="outlined" href="" onClick={nextHandler}>
          <DynamicIcon iconName="ArrowForwardIos" className="" />
        </Button>
      </div>
    </div>
  )
}

export { Monitor }
