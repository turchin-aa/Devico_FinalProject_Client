import React, {useRef} from 'react';
import {BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import {createTheme,ThemeProvider } from "@mui/material"
import HomePage from "./pages/HomePage"
import FAQ from "./pages/FAQ"
import useStyles from './components/styles/useStyle'
import SideBar from './components/Navigation/SideBar'
import NavBar from './components/Navigation/NavBar'

const theme = createTheme({
  spacing: [0, 2, 3, 5, 8],
  palette:{
    primary:{
      main: '#9470CE',
      light: '#A083D5'
    }
  }
}
)

const App: React.FC = () =>{
  const classes = useStyles()

  const upcomingRef = useRef(null)
  const calendarRef = useRef(null)
  const newsRef = useRef(null)
  const partnersRef = useRef(null)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.appContainer}>
          <SideBar/>
          <NavBar/>
          <Routes>
            <Route path={["/","/#upcoming-events",'/#events-calendar','/#news', '/#partners']}>
              <HomePage upcomingRef={upcomingRef} calendarRef={calendarRef} newsRef={newsRef} partnersRef={partnersRef}/>
            </Route>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="*" element={
            <div>
              <h2>404 Page not found</h2>
            </div>}/>
          </Routes>
        </div>

      </Router>
    </ThemeProvider>
  )
}


export default App;
