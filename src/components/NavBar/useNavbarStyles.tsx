import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useNavbarStyles = makeStyles((theme: Theme) => ({
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

  userBar: {
    backgroundColor: '#000',
    position: 'fixed',
    top: 0,
    right: 0,

    height: 60,
    fontSize: 12,
  },

  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userBarDivider: {
    '&&': {
      backgroundColor: '#fff',
    },
  },
  userBarText: {
    marginLeft: 12,
    '& > div': {
      marginTop: -5,
    },
  },
  userBarInner: {
    width: 60,
    height: '100%',
  },

  userBarButton: {
    cursor: 'pointer',
  },
  userBarComponentW: {
    '&&': {
      color: '#fff',
    },
  },

  userBarDropdown: {
    width: 224,
    marginTop: 12,
    marginLeft: 15,
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
    marginTop: 12,
  },
  userBarNotifArrow: {
    position: 'absolute',
    top: 40,
    right: 237,
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
}))

export default useNavbarStyles
