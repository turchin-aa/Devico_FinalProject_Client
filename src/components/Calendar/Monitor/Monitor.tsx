import DynamicIcon from '../../DynamicIcon'
import { FilterAlt } from '@mui/icons-material'
import { Button } from '@mui/material'
import clsx from 'clsx'
import { Moment } from 'moment'
import { useCalendarStyles } from '../useCalenadrStyles'
import UserBarButtons from '../../NavBar/dropdown/userBarButtons'
import DropDownOptions from '../../FilterSort/DropDownOptions'
import { memo } from 'react'
import { filterMenu } from '../../FilterSort/menuOptions'

interface Props {
  prevHandler: () => void
  nextHandler: () => void
  today: Moment
}

const Monitor: React.FC<Props> = ({ prevHandler, nextHandler, today }) => {
  const classes = useCalendarStyles()
  return (
    <div className={classes.calendarHeader}>
      <div className={clsx(classes.flexCenter)}>
        <span id="month">{today.format('MMMM')} </span>
        <span>{today.format('YYYY')}</span>
        <div style={{ position: 'relative' }}>
          <UserBarButtons
            menuClass={classes.filterClass}
            popperClassName={classes.popper}
            buttonClass={classes.flexCenter}
            popperPosition={true}
          >
            <div className={clsx(classes.filterButton, classes.flexCenter)}>
              <FilterAlt fontSize="small" />
              <span>Filter</span>
            </div>
            <DropDownOptions menu={filterMenu} />
          </UserBarButtons>
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

export default memo(Monitor)
