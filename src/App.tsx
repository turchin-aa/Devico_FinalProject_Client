import { useRef, useState, RefObject } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Theme, createTheme, ThemeProvider } from '@mui/material'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import { makeStyles } from '@mui/styles'
import SideBar from './components/Navigation/SideBar/SideBar'
import NavBar from './components/Navigation/NavBar/NavBar'
import SignUp from './components/sign-up/SignUp'
import SignIn from './components/sign-in/SignIn'

const theme = createTheme({
  spacing: [0, 2, 3, 5, 8],
  palette: {
    primary: {
      main: '#9470CE',
      light: '#B19CD8',
    },
  },
})

const useStyles = makeStyles((theme: Theme) => ({
  appContainer: {
    display: 'flex',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

  const upcomingRef: RefObject<HTMLDivElement> = useRef(null)
  const calendarRef: RefObject<HTMLDivElement> = useRef(null)
  const newsRef: RefObject<HTMLDivElement> = useRef(null)
  const partnersRef: RefObject<HTMLDivElement> = useRef(null)

  const [logged, setLogged] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.appContainer}>
          <SideBar
            upcomingRef={upcomingRef}
            calendarRef={calendarRef}
            newsRef={newsRef}
            partnersRef={partnersRef}
          />
          <NavBar logged={logged} setLogged={setLogged} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  upcomingRef={upcomingRef}
                  calendarRef={calendarRef}
                  newsRef={newsRef}
                  partnersRef={partnersRef}
                  logged={logged}
                />
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
    // <>
    //   <SignIn />
    //   <SignUp />
    // </>
  )
}

export default App
