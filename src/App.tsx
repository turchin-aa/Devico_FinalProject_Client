import React, { memo, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { sagaActions, eventActions } from './store/saga-actions'
import SideBar from './components/Sidebar/SideBar'
import NavBar from './components/NavBar/NavBar'
import Auth from './components/Auth'
import { useAppDispatch, useAppSelector } from './hooks/redux.hook'
import ApplyCancelModals from './components/RegisterForEvent/index'
import Loader from './components/LazyLoad/Loader'
import { io } from 'socket.io-client'
import { userSliceActions } from './store/user-slice'

export type socketType = ReturnType<typeof io>

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector<boolean>(state => state.user.isAuth)
  const socket = useAppSelector<socketType | null>(state => state.user.socket)
  const email = useAppSelector<string | undefined>(state => state.user.email)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch({ type: sagaActions.USER_REFRESH_SAGA })
    }
    dispatch({ type: eventActions.EVENT_GET_SAGA })
    dispatch({ type: sagaActions.USER_GET_DATA_SAGA })
    dispatch({ type: sagaActions.USER_GET_CARS_SAGA })
    dispatch({ type: sagaActions.USER_EVENTS_DATA_SAGA })
    dispatch({ type: sagaActions.USER_GET_NOTIFICATIONS_SAGA })
  }, [])

  useEffect(() => {
    const socket = io('http://localhost:5000')
    dispatch(userSliceActions.setSocket({ socket }))
  }, [])

  useEffect(() => {
    socket?.emit('newUser', email)
  }, [socket, email])

  const HomePage = lazy(() => import('./pages/HomePage'))
  const AllEvents = lazy(() => import('./pages/AllEvents'))
  const FAQ = lazy(() => import('./pages/FAQ'))
  const EventPage = lazy(() => import('./pages/EventPage/EventPage'))
  const CreateNewPass = lazy(() => import('./components/PasswordRecover/CreateNewPass'))
  const Profile = lazy(() => import('./components/Profile/Profile'))
  const PageNotFound = lazy(() => import('./pages/404'))
  const LicensePage = lazy(() => import('./pages/LicensePage/LicensePage'))

  return (
    <Router>
      <SideBar />
      <NavBar />
      <Suspense fallback={<Loader />}>
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
          <Route
            path="profile/license"
            element={isAuth ? <LicensePage /> : <Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
      <Auth />
      <ApplyCancelModals />
    </Router>
  )
}

export default memo(App)
