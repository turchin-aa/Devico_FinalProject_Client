import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const white: string = '#fff'
const black: string = '#000'

const useScrollableStyles = makeStyles((theme: Theme) => ({
  sliderContainer: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '86vw',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '84vw',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '89vw',
    },
    overflow: 'hidden',
  },
  scrollContainer: {
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
  },
}))
export default useScrollableStyles
