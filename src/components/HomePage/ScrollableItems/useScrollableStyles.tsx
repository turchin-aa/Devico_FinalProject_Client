import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const white: string = '#fff'
const black: string = '#000'

const useScrollableStyles = makeStyles((theme: Theme) => ({
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
}))
export default useScrollableStyles
