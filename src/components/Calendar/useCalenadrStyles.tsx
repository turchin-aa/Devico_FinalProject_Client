import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useCalendarStyles = makeStyles((theme: Theme) => ({
  calendarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 700,
    '& > div': {
      '& >  span': {
        fontSize: 30,
      },
      '& > div.filter': {
        marginTop: 10,
        fontSize: 14,
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  filterClass: {
    left: 130,
    top: 110,
    color: '#8F8F8F',
    width: 224,
  },
  calendarEventWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    color: '#fff',
    fontSize: 12,
  },
  rowInCell: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 1,
    marginLeft: 1,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButton: {
    color: '#000',
    textTransform: 'capitalize',
  },
  filterMenu: {
    marginTop: 50,
  },
  eventsButton: {
    paddingLeft: 5,
    '&:hover': {
      cursor: 'pointer',
    },
    '& > span#arrow': {
      fontSize: 18,
      marginRight: 5,
    },
    '& > span#title': {
      '@media (min-width: 400px)': {
        display: 'none',
      },
      '@media (min-width: 800px)': {
        display: 'initial',
      },
    },
  },
  eventButtonArrow: {
    transform: 'rotate(180deg)',
  },
}))
