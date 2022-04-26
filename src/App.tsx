import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {createTheme,ThemeProvider } from "@mui/material"
// import SideBar from "./components/SideBar"
import HomePage from "./pages/HomePage"

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    
  )
}


export default App;
