import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useBackStyles = makeStyles((theme: Theme) => ({
  navBack: {
    paddingLeft: 10,
    marginTop: 70,
    height: 70,
  },
  navLinkBack: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:active': {
      color: theme.palette.primary.dark,
    },
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.dark,
    },
  },
  profileTitle: {
    fontWeight: 700,
    fontSize: 35,
  },
}))
