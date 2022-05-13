import { memo, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import { sagaActions } from './store/saga-actions'
import SideBar from './components/Sidebar/SideBar'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/Auth/SignUp/SignUp'
import SignIn from './components/Auth/SignIn/SignIn'
import PassRecover from './components/PasswordRecover/PassRecover'
import { useAppDispatch } from './hooks/redux.hook'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: sagaActions.USER_REFRESH_SAGA })
    }
  }, [dispatch])

  return (
    <>
      <Router>
        <SideBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <SignUp />
      <SignIn />
      <PassRecover />
    </>
  )
}

export default memo(App)
