import { call, takeEvery, put, Effect, SagaReturnType } from 'redux-saga/effects'
import { userSliceActions } from './user-slice'
import { sagaActions, eventActions } from './saga-actions'
import AuthService from '../services/AuthService'
import PasswordService from '../services/PasswordService'
import { eventSliceActions } from './event-slice'
import EventService from '../services/EventService'
import { uiActions } from '../store/ui-slice'
import api from '../hooks'

type RegisterServiceType = SagaReturnType<typeof AuthService.register>
type LoginServiceType = SagaReturnType<typeof AuthService.login>
type RefreshServerType = SagaReturnType<typeof AuthService.checkAuth>
type GetServiceType = SagaReturnType<typeof EventService.getEvent>

const { setEvent } = eventSliceActions
const { setUser, toggleAuth, removeUser, unToggleAuth, toggleEmailSend } = userSliceActions

const { toggleLog, toggleReg, toggleCongratAuth, toggleCreateNewPassword } = uiActions

export function* userSignUpSaga(action: Effect) {
  try {
    const { email, password } = action.payload
    const data: RegisterServiceType = yield call(AuthService.register, email, password)
    const { accessToken, id } = data.data
    yield put(toggleReg())
    yield put(setUser({ id, email }))
    yield put(toggleCongratAuth())
    yield put(toggleAuth())
    localStorage.setItem('token', accessToken)
  } catch (error) {
    console.log(error)
  }
}
export function* userLoginSaga(action: Effect) {
  try {
    const { email, password } = action.payload
    const data: LoginServiceType = yield call(AuthService.login, email, password)
    const { accessToken, id } = data.data
    yield put(setUser({ id, email }))
    yield put(toggleLog())
    yield put(toggleCongratAuth())
    yield put(toggleAuth())
    localStorage.setItem('token', accessToken)
  } catch (error) {
    console.log(error)
  }
}

export function* userLogoutSaga() {
  try {
    yield call(async () => {
      return await api.post('/auth/logout')
    })
    localStorage.removeItem('token')
    yield put(unToggleAuth())
    yield put(removeUser())
  } catch (error) {
    console.log(error)
  }
}

export function* userRefreshSaga() {
  try {
    const data: RefreshServerType = yield call(AuthService.checkAuth)
    const { accessToken, id, email } = data.data
    yield put(setUser({ id, email }))
    localStorage.setItem('token', accessToken)
    yield put(toggleAuth())
  } catch (error) {
    console.log(error)
  }
}

export function* userResetPassSaga(action: Effect) {
  try {
    const { email } = action.payload
    yield call(PasswordService.resetPass, email)
    yield put(toggleEmailSend())
  } catch (error) {
    console.log(error)
  }
}

export function* userNewPassSaga(action: Effect) {
  try {
    const { password, token, id } = action.payload
    yield call(PasswordService.createNewPass, password, token, id)
    yield put(toggleCreateNewPassword())
    yield put(toggleLog())
  } catch (error) {
    console.log(error)
  }
}

export function* updateUserDataSaga(action: Effect) {
  try {
    const { email } = action.payload
    yield call(async () => {
      return await api.patch('/updateUser', { ...action.payload })
    })
    if (email) {
      yield put(setUser({ email }))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* eventGetSaga(action: Effect) {
  try {
    const data: GetServiceType = yield call(EventService.getEvent)
    const { events } = data.data
    yield put(setEvent({ events }))
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.USER_SIGNUP_SAGA, userSignUpSaga)
  yield takeEvery(sagaActions.USER_LOGIN_SAGA, userLoginSaga)
  yield takeEvery(sagaActions.USER_LOGOUT_SAGA, userLogoutSaga)
  yield takeEvery(sagaActions.USER_REFRESH_SAGA, userRefreshSaga)
  yield takeEvery(sagaActions.USER_NEWPASS_SAGA, userNewPassSaga)
  yield takeEvery(sagaActions.USER_RESET_SAGA, userResetPassSaga)
  yield takeEvery(eventActions.EVENT_GET_SAGA, eventGetSaga)
  yield takeEvery(sagaActions.USER_UPDATE_DATA_SAGA, updateUserDataSaga)
}
