import React from 'react';
import {BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import {createTheme,ThemeProvider } from "@mui/material"
import {makeStyles} from '@mui/styles'
import HomePage from "./pages/HomePage"
import FAQ from "./pages/FAQ"
import SideBar from './components/SideBar'

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

const useStyles = makeStyles(theme=>({
  contain:{
    display:'flex'
  }
}))



const App: React.FC = () =>{
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.contain}>
          <SideBar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
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
