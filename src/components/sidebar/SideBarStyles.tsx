import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useSideBarStyles = makeStyles((theme: Theme) => ({
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  active: {
    backgroundColor: '#77629e',
    position: 'relative',
    boxShadow: 'inset 10px 0 0 0 #f9e506',
  },
  //sidebar - inactive button
  inactive: {
    boxShadow: 'inset 0 0 0 0 #f9e506',
    paddingLeft: 0,
  },
  //overrides drawer paper
  drawerPaper: {
    '&&': {
      color: '#fff',
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

  responsiveList: {
    '@media (min-width: 400px)': {
      top: '15%',
    },
    '@media (min-width: 600px)': {
      top: '0%',
    },
    '@media (min-width: 1280px)': {},
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
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
}))

export default useSideBarStyles
