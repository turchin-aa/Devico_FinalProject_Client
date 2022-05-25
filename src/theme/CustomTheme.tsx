import { makeStyles } from '@mui/styles'
import { Theme, createTheme, ThemeProvider } from '@mui/material'
export const theme = createTheme({
  spacing: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
