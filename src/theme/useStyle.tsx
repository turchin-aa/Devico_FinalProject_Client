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
  pageNotFoundContainer: {
    minHeight: 400,
  },
  pageNotFound: {
    position: 'relative',
    width: '100%',
  },
  pageNotFoundImg: {
    width: '100%',
  },
  pageNotFoundQuestContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 700,
  },
  pageNotFoundMainText: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 50,
    },
    textAlign: 'center',
    '& > span': {
      textDecoration: 'underline',
      transition: theme.transitions.create('all', {
        duration: '0.2s',
      }),
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
    },
  },
  pageNotFoundAnimSpan: {
    transform: 'scale(0)',
    marginRight: 5,
    '&#one': {
      color: '#EFCF20',
      animation: `$question1 6s infinite ${theme.transitions.easing.easeInOut}`,
    },
    '&#two': {
      color: theme.palette.primary.main,
      animation: `$question2 6s infinite ${theme.transitions.easing.easeInOut}`,
    },
    '&#three': {
      color: '#EFCF20',
      animation: `$question3 6s infinite ${theme.transitions.easing.easeInOut}`,
    },
  },
  pageNotFoundAnimContainer: {
    position: 'relative',
    top: 0,
    width: 100,
    left: '106%',
    animation: `$carRide 6s infinite ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes carRide': {
    '0%': {
      left: '113%',
    },
    '50%': {
      left: '45%',
    },
    '100%': {
      left: '-30%',
    },
  },
  '@keyframes question1': {
    '30%': {
      transform: 'scale(0)',
    },
    '35%': {
      transform: 'scale(1)',
    },
    '65%': {
      transform: 'scale(0)',
    },
  },
  '@keyframes question2': {
    '37%': {
      transform: 'scale(0)',
    },
    '40%': {
      transform: 'scale(1)',
    },
    '65%': {
      transform: 'scale(0)',
    },
  },
  '@keyframes question3': {
    '44%': {
      transform: 'scale(0)',
    },
    '49%': {
      transform: 'scale(1)',
    },
    '65%': {
      transform: 'scale(0)',
    },
  },

  pageTitle: {
    fontWeight: 600,
    textAlign: 'center',
    '& > p#main-text': {
      [theme.breakpoints.down('sm')]: { fontSize: 36 },
      [theme.breakpoints.up('sm')]: { fontSize: 50 },
    },
    '& > p#secondary-text': {
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        marginTop: -40,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 40,
        marginTop: -50,
      },
    },
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
  mainPageMargin: {
    marginRight: 5,
    marginLeft: 5,
  },
  homePageContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 60,
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      width: '83.5%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '83%',
    },
    [theme.breakpoints.up('md')]: {
      width: '88%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '89%',
    },

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
    '& > #title, &> #partners-title, & > #news-title': {
      marginBottom: 5,
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
      [theme.breakpoints.up('sm')]: {
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
    width: 174,
    height: 48,
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

  allEventsGridContainer: {
    width: '100%',
  },
  event: {
    position: 'relative',
    height: '100%',
    '& > #img': {
      width: '100%',
      height: '100%',
      '& > img': {
        minHeight: 200,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(2px)',
      },
    },
  },
  eventContent: {
    position: 'absolute',
    textAlign: 'start',
    borderRadius: '5px',
    top: 10,
    bottom: 10,
    // slider
    '&#scrollable': {
      fontSize: 18,
      transition: theme.transitions.create('all', {
        duration: '0.2s',
      }),
      '@media (min-width: 400px)': {
        fontSize: 12,
      },
      '@media (min-width: 600px)': {
        fontSize: 16,
      },
      '@media (min-width: 930px)': {
        fontSize: 18,
      },

      '& > p#event-name': {
        fontWeight: 700,
        marginTop: -10,
        '@media (min-width: 400px)': {
          fontSize: 28,
        },
        '@media (min-width: 930px)': {
          fontSize: 36,
        },
      },

      '& > div#event-date': {
        display: 'flex',
        alignItems: 'center',
        '@media (min-width: 400px)': {
          fontSize: 16,
          marginTop: -45,
        },
        '@media (min-width: 600px)': {
          fontSize: 20,
          marginTop: -55,
        },
        '@media (min-width: 900px)': {
          fontSize: 20,
          marginTop: -65,
        },
        '@media (min-width: 1240px)': {
          fontSize: 26,
          marginTop: -65,
        },
        fontWeight: 600,
        '& > p#event-place': {
          '@media (min-width: 400px)': {
            fontSize: 12,
          },
          '@media (min-width: 600px)': {
            fontSize: 18,
          },
          '@media (min-width: 1240px)': {
            fontSize: 20,
          },
          fontWeight: 150,
        },
      },
      '& > div#event-info': {
        '@media (min-width: 400px)': {
          fontSize: 11,
          marginTop: 100,
        },
        '@media (min-width: 419px)': {
          fontSize: 12,
          marginTop: 100,
        },
        '@media (min-width: 600px)': {
          fontSize: 16,
          marginTop: 55,
        },
        '@media (min-width: 930px)': {
          fontSize: 18,
          marginTop: 40,
        },
        '@media (min-width: 1024px)': {
          marginTop: 50,
        },
        '& > p': {
          marginTop: -15,
        },
      },
      '& > div#event-footer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (min-width: 400px)': {
          marginTop: 10,
        },
        '@media (min-width: 600px)': {
          marginTop: 15,
        },
        '@media (min-width: 930px)': {
          marginTop: 7,
        },
        '@media (min-width: 1024px)': {
          marginTop: 20,
        },
        '& > #event-button': {
          fontSize: 14,
          width: 162,
          height: 48,
        },
        '& > a': {
          textDecoration: 'none',
          color: '#000',
          fontSize: 14,
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },

      '& > p#event-title': {
        '@media (min-width: 400px)': {
          width: 100,
        },
        '@media (min-width: 600px)': {
          width: 120,
        },
        '@media (min-width: 930px)': {
          width: 148,
        },
        textAlign: 'center',
        backgroundColor: theme.palette.primary.light,
      },
    },

    // for all events page
    '&#grid': {
      '@media (min-width: 400px)': {
        fontSize: 14,
      },
      '@media (min-width: 600px)': {
        fontSize: 16,
      },
      '@media (min-width: 750px)': {
        fontSize: 14,
      },
      '@media (min-width: 1100px)': {
        fontSize: 16,
      },

      '& > p#event-name': {
        fontWeight: 700,
        marginTop: -15,
        '@media (min-width: 400px)': {
          fontSize: 28,
        },
        '@media (min-width: 750px)': {
          fontSize: 26,
        },
        '@media (min-width: 1100px)': {
          fontSize: 28,
        },
      },

      '& > div#event-date': {
        display: 'block',
        '@media (min-width: 400px)': {
          fontSize: 20,
        },
        '@media (min-width: 750px)': {
          fontSize: 18,
        },
        '@media (min-width: 1100px)': {
          fontSize: 24,
        },

        fontWeight: 600,
        marginTop: -30,
        '& > p#event-place': {
          '@media (min-width: 400px)': {
            fontSize: 20,
            marginTop: -25,
          },
          '@media (min-width: 750px)': {
            fontSize: 16,
            marginTop: -25,
          },
          '@media (min-width: 1100px)': {
            fontSize: 20,
            marginTop: -30,
          },
          fontWeight: 150,
        },
      },
      '& > div#event-info': {
        '@media (min-width: 400px)': {
          fontSize: 16,
          marginTop: 100,
        },
        '@media (min-width: 419px)': {
          fontSize: 16,
          marginTop: 100,
        },
        '@media (min-width: 750px)': {
          fontSize: 14,
          marginTop: 110,
        },
        '@media (min-width: 961px)': {
          fontSize: 14,
          marginTop: 120,
        },
        '@media (min-width: 1100px)': {
          fontSize: 16,
          marginTop: 50,
        },
        '& > p': {
          marginTop: -15,
        },
      },
      '& > div#event-footer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (min-width: 400px)': {
          marginTop: 10,
        },
        '@media (min-width: 541px)': {
          marginTop: 20,
        },
        '@media (min-width: 750x)': {
          marginTop: 15,
        },
        '@media (min-width: 1024px)': {
          marginTop: 30,
        },
        '& > #event-button': {
          fontSize: 14,
          width: 162,
          height: 48,
        },
        '& > a': {
          textDecoration: 'none',
          color: '#000',
          fontSize: 14,
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
      '& > p#event-title': {
        '@media (min-width: 400px)': {
          width: 100,
        },
        '@media (min-width: 600px)': {
          width: 120,
        },
        '@media (min-width: 1100px)': {
          width: 148,
        },
        textAlign: 'center',
        backgroundColor: theme.palette.primary.light,
      },
    },
    right: 10,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#000',
    padding: `10px 20px 10px 20px`,
  },
  viewDetails: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
  loader: {
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
  },
}))

export default useStyles
