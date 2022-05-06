import DynamicIcon from '../../DynamicIcon'
import useStyles from '../../styles/useStyle'
import { FilterAlt } from '@mui/icons-material'
import { Button } from '@mui/material'
import clsx from 'clsx'

const Monitor = (props: { prevHandler; nextHandler; today }) => {
  const classes = useStyles()
  return (
    <div className={classes.calendarHeader}>
      <div className={clsx(classes.flexCenter)}>
        <span id="month">{props.today.format('MMMM')} </span>
        <span>{props.today.format('YYYY')}</span>
        <div className={clsx(classes.flexCenter, 'filter')}>
          <FilterAlt fontSize="small" />
          Filter
        </div>
      </div>

      <div>
        <Button variant="outlined" href="" onClick={props.prevHandler}>
          <DynamicIcon iconName="ArrowBackIos" className="" />
        </Button>
        <Button variant="outlined" href="" onClick={props.nextHandler}>
          <DynamicIcon iconName="ArrowForwardIos" className="" />
        </Button>
      </div>
    </div>
  )
}

export { Monitor }
