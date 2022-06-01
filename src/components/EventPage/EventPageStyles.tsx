import { styled, Button, Typography, Select, Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { theme } from '../../theme/CustomTheme'

export const useStyles = makeStyles((theme: Theme) => ({
  eventPageContainer: { width: '100%' },
  eventPageCardContainer: {
    marginTop: -45,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  eventPageCard: {
    width: '95%',
    transition: theme.transitions.create('all', {
      duration: '0.2s',
    }),
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('sm')]: {
      height: 350,
    },
    [theme.breakpoints.up('md')]: {
      height: 480,
    },
  },
  eventInfo: {
    marginTop: 10,
    marginBottom: 20,
  },
  eventDetailsContainer: {
    marginTop: 15,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventPageButton: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
    },
  },
}))

export const EventPageContainer = styled(Box)({
  width: '95%',
  display: 'grid',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 0.5fr',
  },
})

export const EventDetailsContainer = styled(Box)({
  '& > div#title': {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
    },
    fontSize: 20,
    fontWeight: 700,
  },
})

export const EventInfoContainer = styled(Box)({
  '& > div#title-wrapper': {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  '& > div div#title': {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
      paddingRight: 60,
    },
  },
})

export const ParticipantsButton = styled(Button)({
  marginTop: 3,
  marginBottom: 5,
  backgroundColor: '#6A6968',
  height: 48,
  fontSize: 13,
  width: '50%',
  color: '#fff',
})
