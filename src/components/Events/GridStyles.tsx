import { theme } from '../../theme/CustomTheme'
import { styled, Button } from '@mui/material'

export const GridContainer = styled('div')({
  position: 'relative',
  display: 'grid',
  '@media (min-width: 400px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  '@media (min-width: 750px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 1100px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  width: '100%',
})

export const EventContainer = styled('div')({
  width: '95',
  padding: '10px 10px 10px 10px',
})

export const EventContent = styled('div')({
  transition: theme.transitions.create('all', {
    duration: '0.2s',
  }),
  [theme.breakpoints.up('xs')]: {
    width: 300,
    height: 410,
  },
  [theme.breakpoints.up('sm')]: {
    width: 470,
    height: 465,
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    height: 410,
  },
  [theme.breakpoints.up('lg')]: {
    width: 345,
    height: 410,
  },
})

export const GridButton = styled(Button)({
  marginTop: 3,
  marginBottom: 5,
  height: 20,
  width: 10,
  fontSize: 11,
  color: '#000',
})
