import { makeStyles } from '@mui/styles'
import { Theme, createTheme, ThemeProvider } from '@mui/material'
const theme = createTheme({
  spacing: [0, 2, 3, 5, 8],
  palette: {
    primary: {
      main: '#9470CE',
      light: '#B19CD8',
    },
  },
})

export const useStyles = makeStyles((theme: Theme) => ({
  appContainer: {
    display: 'flex',
  },
}))

export const CustomTheme = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>{children}</div>
    </ThemeProvider>
  )
}
