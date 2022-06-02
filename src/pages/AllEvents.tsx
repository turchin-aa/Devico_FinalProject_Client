import clsx from 'clsx'
import { memo } from 'react'
import BackButton from '../components/BackArrowButton/BackButton'
import EventsGrid from '../components/Events/EventsGrid'
import useStyles from '../theme/useStyle'
import { useAppSelector } from '../hooks/redux.hook'
import { EventData } from '../types/globalTypes'
import { GridButton } from '../components/Events/GridStyles'
import { FilterAlt, Sort } from '@mui/icons-material'
import DropDownOptions from '../components/FilterSort/DropDownOptions'
import { filterMenu, sortMenu } from '../components/FilterSort/menuOptions'
import UserBarButtons from '../components/NavBar/dropdown/userBarButtons'

const AllEvents: React.FC = () => {
  const classes = useStyles()
  const events = useAppSelector<EventData>(state => state.event.events)

  return (
    <div className={clsx(classes.allEventsGridContainer, classes.mainPageMargin)}>
      <div className={classes.gridHeaderContainer}>
        <BackButton>
          <span>All events</span>
        </BackButton>
        <div className={classes.gridButtons}>
          <UserBarButtons
            menuClass={classes.filterClassSort}
            popperClassName={classes.popper}
            buttonClass={classes.flexCenterButton}
            popperPosition={true}
          >
            <div className={clsx(classes.filterButton, classes.flexCenter)}>
              <Sort fontSize="small" />
              <span>Sort</span>
            </div>
            <DropDownOptions menu={sortMenu} />
          </UserBarButtons>

          <UserBarButtons
            menuClass={classes.filterClass}
            popperClassName={classes.popper}
            buttonClass={classes.flexCenterButton}
            popperPosition={true}
          >
            <div className={clsx(classes.filterButton, classes.flexCenter)}>
              <FilterAlt fontSize="small" />
              <span> Filter</span>
            </div>
            <DropDownOptions menu={filterMenu} />
          </UserBarButtons>
        </div>
      </div>
      <EventsGrid events={events} />
    </div>
  )
}

export default memo(AllEvents)
