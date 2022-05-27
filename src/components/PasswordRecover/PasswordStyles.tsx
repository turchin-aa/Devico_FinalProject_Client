import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { theme } from '../../theme/CustomTheme'

export const useStyles = makeStyles((theme: Theme) => ({
  typography: {
    height: 50,
    fontWeight: 600,
    fontSize: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: { height: 14, width: 320, marginBottom: 4, color: '#e53e3e', fontSize: 12 },
}))
