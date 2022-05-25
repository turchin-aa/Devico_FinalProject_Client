import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useAuthStyles = makeStyles((theme: Theme) => ({
  titleTypo: {
    fontWeight: 700,
    fontSize: 26,
  },
  dialog: {
    position: 'relative',
  },
  dialogContainer: {
    flexDirection: 'column',
    height: '100%',
  },
  dialogTitle: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: '25%',
    },
    [theme.breakpoints.up('sm')]: {
      height: 30,
    },
  },
  divider: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
    marginTop: 12,
  },
  leftTextField: {
    [theme.breakpoints.down('sm')]: { marginLeft: 0 },
    [theme.breakpoints.up('sm')]: { marginLeft: '1%' },
  },
  recoverTitle: {
    position: 'absolute',
    left: 0,
    bottom: -20,
    width: '100%',
    display: 'flex',
    height: 20,
    justifyContent: 'center',
    alignItems: 'end',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  formControl: {
    position: 'relative',
    marginTop: -5,
    '&#sign-in': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  errorMessege: {
    height: 18,
    '&#terms': {
      marginTop: -10,
    },
  },
  forgotPass: {
    position: 'absolute',
    right: 0,
  },
  mobileView: {
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      marginTop: 50,
    },
  },
  rememberSpan: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: 40,
    color: '#595353',
    '&#process': {
      fontSize: 16,
      fontWeight: 550,
    },
  },
}))
