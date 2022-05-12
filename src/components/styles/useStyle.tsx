import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const white: string = '#fff'
const black: string = '#000'

const useStyles = makeStyles((theme: Theme) => ({
  //gradle for navbar and pages
  appContainer: {
    display: 'flex',
  },
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
  filterGreyScale: {
    transform: 'scale(1)',
    filter: 'grayscale(100%)',
    transition: theme.transitions.create('all', {
      duration: '0.2s',
    }),
    '&:hover': {
      filter: 'grayscale(0%)',
      transform: 'scale(1.02)',
    },
  },
  homePageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginRight: 110,
    marginTop: 60,
    zIndex: 0,
    width: '100%',
    height: '100%',
    scrollBehavior: 'smooth',
  },
  homeBlocks: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    '& > div#partners-title, & > div#news-title': {
      textAlign: 'start',
    },
    '&>div#eventHeader': {
      textAlign: 'center',
    },
  },
  blockTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
    '& > #title, & > #news-title': {
      fontSize: 28,
      fontWeight: 700,
      '@media (min-width: 400px)': {
        fontSize: 18,
      },
      '@media (min-width: 1280px)': {
        fontSize: 28,
      },
    },
    '& > #view-all': {
      marginTop: 10,
      fontSize: 14,
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
  },

  postWrapper: {
    backgroundColor: 'yellow',
    display: 'flex',
  },

  tableStyle: {
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default useStyles
