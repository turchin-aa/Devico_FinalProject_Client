import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useWelcomeStyles = makeStyles((theme: Theme) => ({
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
    backgroundColor: '#000',
    color: '#fff',

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
      color: '#fff',
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
      backgroundColor: '#fff',
      color: '#000',
    },
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
      color: '#000',
      marginTop: 12,
    },
    '& > div a': {
      color: theme.palette.primary.main,
    },
  },
  mainText: {
    fontSize: 50,
    fontWeight: '700',
    '& > span': {},
  },
}))

export default useWelcomeStyles
