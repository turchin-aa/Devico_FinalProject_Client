import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useCongratsStyles = makeStyles((theme: Theme) => ({
  dialog: {
    position: 'relative',
  },
  dialogContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  infoMessege: {
    fontWeight: 700,
    fontSize: 18,
  },
  forSubmitedInfo: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  dialogTitle: {
    height: '20%',
  },
  dialogActionsContainer: {
    position: 'relative',
    display: 'flex',
    alignItem: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
    },
  },
  dialogActions: {
    marginTop: 10,
    height: 40,
  },
  dialogBox: {
    width: '100%',
  },
  dialogButton: {
    width: '35%',
    position: 'absolute',
    left: 0,
  },
  dialogContent: {
    marginTop: -30,
  },

  dialogText: {
    '& > div#welcome': {
      marginTop: -5,
      fontWeight: 700,
      fontSize: 18,
    },
    '& > div#text': {
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      textAlign: 'start',
    },
  },
}))
