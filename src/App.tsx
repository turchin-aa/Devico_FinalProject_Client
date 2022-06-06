import { memo, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/404'
import FAQ from './pages/FAQ'
import { sagaActions, eventActions } from './store/saga-actions'
import SideBar from './components/Sidebar/SideBar'
import NavBar from './components/NavBar/NavBar'
import CreateNewPass from './components/PasswordRecover/CreateNewPass'
import Auth from './components/Auth'
import { useAppDispatch, useAppSelector } from './hooks/redux.hook'
import Profile from './components/Profile/Profile'
import AllEvents from './pages/AllEvents'
import EventPage from './components/EventPage/EventPage'
import ApplyCancelModals from './components/RegisterForEvent/index'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector<boolean>(state => state.user.isAuth)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: sagaActions.USER_REFRESH_SAGA })
    }
    dispatch({ type: eventActions.EVENT_GET_SAGA })
    dispatch({ type: sagaActions.USER_GET_DATA_SAGA })
    dispatch({ type: sagaActions.USER_GET_CARS_SAGA })
    dispatch({ type: sagaActions.USER_EVENTS_DATA_SAGA })
  }, [])

  return (
    <Router>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="allEvents" element={<AllEvents />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route
          path="resetPass"
          element={isAuth ? <Navigate to="/" replace /> : <CreateNewPass />}
        />
        <Route path="profile" element={isAuth ? <Profile /> : <Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Auth />
      <ApplyCancelModals />
    </Router>
  )
}

export default memo(App)
