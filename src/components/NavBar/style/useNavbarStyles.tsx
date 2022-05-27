import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useNavbarStyles = makeStyles((theme: Theme) => ({
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
  popper: {
    position: 'relative',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      zIndex: 1,
    },
    [theme.breakpoints.up('sm')]: {
      zIndex: 0,
    },
  },
  userBarComponentW: {
    '&&': {
      color: '#fff',
    },
  },

  userBarDropdown: {
    position: 'absolute',
    width: 174,
    right: 0,
    top: 60,
    color: '#8F8F8F',
  },
  userBarNotifDropdown: {
    position: 'relative',
    color: '#000',
    width: '100%',
    height: '100%',
  },

  // fix notif relative
  userBarNotif: {
    position: 'absolute',
    top: 60,

    [theme.breakpoints.down('sm')]: {
      width: 350,
      height: 300,
      right: '10%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 450,
      height: 350,
      right: '15%',
    },
  },

  userBarNotifArrow: {
    position: 'absolute',
    top: 40,
    right: 237,
  },

  notifContentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      minHeight: 250,
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: 300,
    },
  },

  notifContent: {
    flexDirection: 'column',
    textAlign: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 14,
    },
  },
  notifContentH: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 24,
    },
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
