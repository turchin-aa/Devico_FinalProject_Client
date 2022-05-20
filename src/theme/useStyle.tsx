import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  //gradle for navbar and pages
  appContainer: {
    display: 'flex',
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
  link: {
    color: '#000',
    textDecoration: 'none',
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
  userBarDropdownButtons: {
    width: 224,
    height: 48,
    color: '#8F8F8F',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#dbd3de',
      color: '#000',
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
