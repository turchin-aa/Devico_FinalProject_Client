import React, {useRef} from 'react';
import {BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import {Theme,createTheme,ThemeProvider } from "@mui/material"
import HomePage from "./pages/HomePage"
import FAQ from "./pages/FAQ"
import {makeStyles} from '@mui/styles'
import SideBar from './components/Navigation/SideBar/SideBar'
import NavBar from './components/Navigation/NavBar/NavBar'

const theme = createTheme({
  spacing: [0, 2, 3, 5, 8],
  palette:{
    primary:{
      main: '#9470CE',
      light: '#A083D5'
    }
  }
})

const useStyles = makeStyles((theme:Theme)=>({
//gradle for navbar and pages  
  appContainer:{
    display:'flex'
  },
}))

const App: React.FC = () =>{
  const classes = useStyles()

  const homeRef = useRef(null)
  const upcomingRef = useRef(null)
  const calendarRef = useRef(null)
  const newsRef = useRef(null)
  const partnersRef = useRef(null)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.appContainer}>
          <SideBar homeRef={homeRef} upcomingRef={upcomingRef}
            calendarRef={calendarRef} newsRef={newsRef} partnersRef={partnersRef}/>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage homeRef={homeRef} upcomingRef={upcomingRef}
            calendarRef={calendarRef} newsRef={newsRef} partnersRef={partnersRef}/>}/>
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
