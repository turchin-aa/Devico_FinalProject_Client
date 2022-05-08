import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const minorFont: number = 12
const margin_tw: number = 12
const white: string = '#fff'
const black: string = '#000'

const useStyles = makeStyles((theme: Theme) => ({
  active: {
    backgroundColor: '#77629e',
    position: 'relative',
    boxShadow: 'inset 10px 0 0 0 #f9e506',
  },
  //gradle for navbar and pages
  appContainer: {
    display: 'flex',
  },
  mainText: {
    fontSize: 50,
    fontWeight: '700',
    '& > span': {},
  },
  additional: {
    marginTop: -30,
    fontSize: '1.3rem',
    color: '#5C5C5C',
  },
  buttons: {
    '@media (min-width: 400px)': {
      '& > *': {
        height: 50,
        width: 150,
        left: -10,
      },
    },
    '@media (min-width: 490px)': {
      '& > *': {
        width: 160,
        left: -5,
      },
    },
    '@media (min-width: 600px)': {
      '& > *': {
        width: 180,
        left: -10,
      },
    },
    '@media (min-width: 930px)': {
      '& > *': {
        width: 160,
        left: 0,
      },
    },
    '@media (min-width: 1040px)': {
      '& > *': {
        width: 180,
        left: '-2%',
      },
    },
    '@media (min-width: 1145px)': {
      '& > *': {
        width: 190,
      },
    },
    '@media (min-width: 1240px)': {
      '& > *': {
        width: 190,
        left: -10,
      },
    },
    '@media (min-width: 1280px)': {
      '& > *': {
        width: 200,
        left: -10,
      },
    },
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    fontSize: 12,
  },
  //sidebar drawer
  container: {
    '@media (min-width: 400px)': {
      width: 55,
      zIndex: 1,
    },
    '@media (min-width: 500px)': {
      width: 60,
    },
    '@media (min-width: 600px)': {
      width: 93,
      zIndex: 2,
    },

    '@media (min-width: 800px)': {
      width: '12%',
    },
    '@media (min-width: 930px)': {
      width: '10%',
    },
    '@media (min-width:1024px)': {
      width: 110,
    },
    '@media (min-width: 1240px)': {
      width: '10%',
      top: 0,
    },
    '@media (min-width: 1280px)': {
      width: '11%',
      top: 0,
    },
    position: 'sticky',
  },
  calendarWrap: {
    position: 'relative',
    width: '100%',
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
  rowInCell: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 1,
  },
  //ovverides drawer style
  drawerPaper: {
    '&&': {
      color: white,
      backgroundColor: theme.palette.primary.main,
      '@media (min-width: 400px)': {
        width: 50,
      },
      '@media (min-width: 600px)': {
        width: 90,
      },
      '@media (min-width: 1280px)': {
        width: 110,
        backgroundColor: theme.palette.primary.main,
        fontSize: 11,
      },
    },
  },
  event: {
    '@media (min-width: 400px)': {
      height: 350,
    },
    '@media (min-width: 600px)': {
      height: 350,
    },
    '@media (min-width: 1024px)': {
      height: 400,
    },
    scrollSnapAlign: 'start',
    '& > div': {
      position: 'relative',
      height: '100%',
      '& > #img': {
        width: '100%',
        height: '100%',
        border: `solid 3px ${white}`,
        '& > img': {
          minHeight: 200,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(2px)',
        },
      },
    },
  },
  eventContent: {
    position: 'absolute',
    textAlign: 'start',
    borderRadius: '5px',
    top: 10,
    bottom: 5,
    right: 10,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: black,
    padding: `${10}px ${20}px 0px ${20}px`,
    fontSize: 18,
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

    '& > p#event-date': {
      '@media (min-width: 400px)': {
        fontSize: 16,
      },
      '@media (min-width: 600px)': {
        fontSize: 20,
      },
      '@media (min-width: 1240px)': {
        fontSize: 26,
        marginTop: -40,
      },
      fontWeight: 600,
      marginTop: -30,
      '& > span#event-place': {
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
        marginTop: 130,
      },
      '@media (min-width: 419px)': {
        fontSize: 12,
        marginTop: 130,
      },
      '@media (min-width: 600px)': {
        fontSize: 16,
        marginTop: 70,
      },
      '@media (min-width: 930px)': {
        fontSize: 18,
        marginTop: 50,
      },
      '@media (min-width: 1024px)': {
        marginTop: 70,
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
        color: black,
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
  eventContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'auto',
    scrollSnapType: 'none',
    scrollBehavior: 'smooth',
    backgroundColor: 'red',
    '@media (min-width: 400px)': {
      width: 350,
      height: 300,
    },
    '@media (min-width: 425px)': {
      width: 370,
    },
    '@media (min-width: 460px)': {
      width: 390,
    },
    '@media (min-width: 480px)': {
      width: 410,
    },
    '@media (min-width: 600px)': {
      width: 450,
      height: 300,
    },
    '@media (min-width: 745px)': {
      width: 650,
      height: 300,
    },
    '@media (min-width: 930px)': {
      width: 800,
      height: 300,
    },
    '@media (min-width: 1024px)': {
      width: 900,
      height: 300,
    },
    '@media (min-width: 1145px)': {
      width: 1100,
      height: 300,
    },
    '@media (min-width: 1240px)': {
      width: 1100,
      height: 480,
    },
  },
  eventHeader: {
    textAlign: 'center',
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
    marginTop: 20,
    marginBottom: 20,
    '& > div#partners, & > div#news-title': {
      textAlign: 'start',
    },
  },
  blockTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
    '& > #title': {
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
  //sidebar - inactive button
  inactive: {
    boxShadow: 'inset 0 0 0 0 #f9e506',
    paddingLeft: 0,
  },
  //sidebar - list item
  item: {
    flexDirection: 'column',
    height: 62,
    cursor: 'pointer',

    '@media (min-width: 400px)': {
      height: 50,
    },
    '@media (min-width: 600px)': {
      height: 52,
    },
    '@media (min-width: 1280px)': {
      height: 60,
    },

    transition: theme.transitions.create('background-color', {
      duration: '0.2s',
    }),

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  responsiveList: {
    '@media (min-width: 400px)': {
      top: '15%',
    },
    '@media (min-width: 600px)': {
      top: '0%',
    },
    '@media (min-width: 1280px)': {},
  },
  logoBlock: {
    '@media (min-width: 400px)': {
      display: 'none',
      height: 15,
      width: 40,
      marginTop: '100%',
      marginBottom: '10%',
    },
    '@media (min-width: 600px)': {
      display: 'initial',
      height: 15,
      width: 80,
      marginTop: '15%',
      marginBottom: '25%',
    },
    '@media (min-width: 1280px)': {
      display: 'initial',
      height: 10,
      width: 100,
      marginTop: '8%',
      marginBottom: '30%',
    },
    position: 'relative',
    left: 5,
  },
  navbar: {
    '&&': {
      '@media (min-width: 400px)': {
        backgroundColor: theme.palette.primary.main,
        zIndex: 2,
      },
      '@media (min-width: 600px)': {
        backgroundColor: 'rgba(255,255,255,0.8)',
        zIndex: 1,
      },
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
      height: 60,
    },
  },
  newsWrapper: {
    height: 400,
    margin: 0,
    '& > #post': {
      margin: 5,
      position: 'relative',
      height: '100%',
      width: '97%',
      borderRadius: 5,
      border: `1px solid ${white}`,
      backgroundColor: white,
      fontSize: 18,
      '& > #content': {
        '& > #title': {
          fontSize: 24,
          fontWeight: 700,
        },
      },
      '& > #media': {
        '& > div#img': {
          width: '100%',
          hight: 200,
          '& > img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        },
        position: 'relative',
      },
    },
  },
  postWrapper: {
    backgroundColor: 'yellow',
    display: 'flex',
  },
  notifContent: {
    flexDirection: 'column',
    textAlign: 'center',
    height: '94%',
    '@media {min-width 400px}': {
      fontSize: 8,
    },
    '@media {min-width 570px}': {
      fontSize: 14,
    },
  },
  notifContentH: {
    fontSize: 24,
    marginBottom: -10,
  },
  notifContentIcon: {
    backgroundColor: '#E5E5E5',
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  notifHeader: {
    display: 'flex',
    alignItems: 'center',
  },

  notifHText: {
    position: 'relative',

    width: '100%',
    height: '100%',
    margin: `0px 10px 10px  10px`,
    '& > span': {
      display: 'block',
      marginTop: 10,
      textAlign: 'end',
      width: '100%',
      height: '100%',
      fontSize: 14,
      color: theme.palette.primary.main,
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
  },
  newsButtonsWrapper: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
  newsButtons: {
    width: 30,
    display: 'inline-block',
    marginRight: 5,
    transform: 'scale(1)',

    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      transform: 'scale(1.1)',
    },
    '& > *': {
      marginLeft: 5,
    },
  },
  partnersContainer: {
    width: 150,
    height: 75,
    marginRight: 10,
    marginBottom: 25,
    '& > img': {
      width: '80%',
      height: '80%',
      objectFit: 'scale-down',
    },
  },
  tableStyle: {
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  iconAlign: {
    marginTop: 4,
    '@media (min-width: 400px)': {
      marginLeft: 3,
    },
    '@media (min-width: 600px)': {
      position: 'relative',
      marginTop: -3,
      marginLeft: 3,
      height: '100%',
    },
    '@media (min-width: 1280px)': {
      marginTop: 0,
      height: '60%',
    },
  },
  text: {
    '@media (min-width: 400px)': {
      display: 'none',
    },
    '@media (min-width: 600px)': {
      display: 'initial',
      fontSize: 7.5,
    },
    '@media (min-width: 1280px)': {
      fontSize: 8.5,
    },

    marginTop: 2,
    textAlign: 'center',
  },
  userBar: {
    backgroundColor: black,
    position: 'fixed',
    top: 0,
    right: 0,

    height: 60,
    fontSize: minorFont,
  },
  userBarButton: {
    cursor: 'pointer',
  },
  userBarComponentW: {
    '&&': {
      color: white,
    },
  },
  userBarDivider: {
    '&&': {
      backgroundColor: white,
    },
  },
  userBarDropdown: {
    width: 224,
    marginTop: 6,
    marginLeft: margin_tw,
  },
  userBarNotifDropdown: {
    '@media (min-width: 400px)': {
      width: 300,
      height: '100%',
    },
    '@media (min-width: 570px)': {
      width: 500,
      height: 400,
    },
  },
  userBarNotif: {
    position: 'relative',
    width: '100%',
    '@media (min-width: 400px)': {
      marginTop: 8,
      marginRight: '50%',
    },
    '@media (min-width: 570px)': {
      marginTop: 20,
      marginRight: '50%',
    },
    marginTop: margin_tw,
  },
  userBarNotifArrow: {
    position: 'absolute',
    top: 40,
    right: 237,
  },
  userBarDropdownButtons: {
    width: 224,
    height: 48,
    color: '#8F8F8F',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#dbd3de',
      color: black,
    },
  },
  userBarInner: {
    width: 60,
    height: '100%',
  },
  userBarText: {
    marginLeft: margin_tw,
    '& > div': {
      marginTop: -5,
    },
  },
  welcomeBlock: {
    '@media (min-width: 400px)': {
      marginLeft: '0%',
      display: '',
      justifyContent: 'center',
      textAlign: 'center',
    },
    '@media (min-width: 930px)': {
      marginLeft: '0%',
      textAlign: 'start',
    },
    '@media (min-width: 1200px)': {
      display: 'block',
      textAlign: 'start',
    },
    width: '100%',
    lineHeight: 1,
    '& > div': {
      color: black,
      marginTop: margin_tw,
    },
    '& > div a': {
      color: theme.palette.primary.main,
    },
  },
  eventImg: {
    '@media (min-width: 400px)': {
      marginTop: 15,
      height: 320,
      width: '90%',
    },
    '@media (min-width: 600px)': {
      height: 300,
    },
    '@media (min-width: 800px)': {
      height: 320,
    },
    '@media (min-width: 850px)': {
      width: '90%',
      height: 350,
    },
    '@media (min-width: 930px)': {
      marginLeft: 50,
      width: 533,
      height: 400,
    },
    '@media (min-width: 1145px)': {
      marginLeft: 50,
      width: 550,
      height: 413,
    },
    '@media (min-width: 1240px)': {
      marginLeft: 50,
      width: 640,
      height: 480,
    },
    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  welcomeFlexCenter: {
    '@media (min-width: 400px)': {
      marginBottom: 120,
    },
    '@media (min-width: 600px)': {
      marginBottom: 120,
    },
    '@media (min-width: 930px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40,
    },
  },
  welcomeEventContainer: {
    '@media (min-width: 400px)': {
      height: 200,
      width: '80%',
      fontSize: 14,
      textAlign: 'center',
    },
    '@media (min-width: 600px)': {
      textAlign: 'center',
      width: '80%',
      height: 250,
    },
    '@media (min-width: 930px)': {
      top: 230,
      right: 0,
      width: 400,
      height: 250,
      textAlign: 'start',
    },
    '@media (min-width: 1240px)': {
      top: 270,
      right: 0,
      width: 500,
      height: 285,
    },

    position: 'absolute',
    backgroundColor: black,
    color: white,

    '& > div, & > p, & > a': {
      '@media (min-width: 400px)': {
        marginLeft: 0,
      },
      '@media (min-width: 745px)': {
        marginLeft: 0,
      },
      '@media (min-width: 930px)': {
        marginLeft: 30,
      },
    },
    '& > p#event-name': {
      '@media (min-width: 400px)': {
        fontSize: 30,
        fontWeight: 700,
        marginTop: -10,
      },
      '@media (min-width: 600px)': {
        fontSize: 38,
        fontWeight: 700,
        marginTop: -10,
      },
      '@media (min-width: 930px)': {
        fontSize: 35,
        fontWeight: 700,
        marginTop: -20,
      },
    },
    '& > p#event-date': {
      '@media (min-width: 400px)': {
        fontSize: 18,
        marginTop: -15,
      },
      '@media (min-width: 600px)': {
        fontSize: 22,
        marginTop: -10,
      },
      '@media (min-width: 930px)': {
        fontSize: 24,
        marginTop: -15,
      },
      fontWeight: 600,
    },
    '& > p#event-place, & > div a': {
      '@media (min-width: 400px)': {
        fontSize: 14,
        marginTop: -15,
      },
      '@media (min-width: 600px)': {
        fontSize: 16,
        marginTop: -15,
      },
      '@media (min-width: 930px)': {
        fontSize: 18,
        marginTop: -30,
      },
    },
    '& > a': {
      color: white,
    },
    '& > div p': {
      textAlign: 'center',
      '@media (min-width: 400px)': {
        marginTop: 20,
        width: 100,
      },
      '@media (min-width: 600px)': {
        marginTop: 20,
        width: 100,
      },
      '@media (min-width: 930px)': {
        marginTop: 38,
        width: 148,
      },
      backgroundColor: white,
      color: black,
    },
  },
}))

export default useStyles
