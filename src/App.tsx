import { memo, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import { sagaActions } from './store/saga-actions'
import SideBar from './components/Sidebar/SideBar'
import NavBar from './components/NavBar/NavBar'
import CreateNewPass from './components/PasswordRecover/CreateNewPass'
import Auth from './components/Auth'
import { useAppDispatch, useAppSelector } from './hooks/redux.hook'
import Profile from './components/Profile/Profile'
const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector(state => state.user.isAuth)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: sagaActions.USER_REFRESH_SAGA })
    }
  }, [])

  return (
    <>
      <Router>
        <SideBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="resetPass"
            element={isAuth ? <Navigate to="/" replace /> : <CreateNewPass />}
          />
          <Route path="profile" element={!isAuth ? <Navigate to="/" replace /> : <Profile />} />
        </Routes>
        <Auth />
      </Router>
    </>
  )
}

export default memo(App)
