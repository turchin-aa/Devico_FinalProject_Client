<<<<<<< HEAD
import React from "react"
import "./App.css"

function App() {
  return <div></div>
=======
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Theme, createTheme, ThemeProvider } from '@mui/material'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import { makeStyles } from '@mui/styles'
import SideBar from './components/Navigation/SideBar/SideBar'
import NavBar from './components/Navigation/NavBar/NavBar'

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

  const homeRef = useRef(null)
  const upcomingRef = useRef(null)
  const calendarRef = useRef(null)
  const newsRef = useRef(null)
  const partnersRef = useRef(null)

  const [logged, setLogged] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.appContainer}>
          <SideBar
            homeRef={homeRef}
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
                  homeRef={homeRef}
                  upcomingRef={upcomingRef}
                  calendarRef={calendarRef}
                  newsRef={newsRef}
                  partnersRef={partnersRef}
                  logged={logged}
                />
              }
            />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
>>>>>>> feature-home-page
}

export default App
