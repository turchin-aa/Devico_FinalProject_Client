import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import SideBar from './components/sidebar/SideBar'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/sign-up/SignUp'
import SignIn from './components/sign-in/SignIn'

const App = () => {
  return (
    <Router>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
