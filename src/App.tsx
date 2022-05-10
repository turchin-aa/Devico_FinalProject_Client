import { useRef, useState, RefObject } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import SideBar from './components/Navigation/SideBar/SideBar'
import NavBar from './components/Navigation/NavBar/NavBar'
import SignUp from './components/sign-up/SignUp'
import SignIn from './components/sign-in/SignIn'

const App: React.FC = () => {
  const upcomingRef: RefObject<HTMLDivElement> = useRef(null)
  const calendarRef: RefObject<HTMLDivElement> = useRef(null)
  const newsRef: RefObject<HTMLDivElement> = useRef(null)
  const partnersRef: RefObject<HTMLDivElement> = useRef(null)

  const [logged, setLogged] = useState(true)

  return (
    <Router>
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
    </Router>
  )
}

export default App
