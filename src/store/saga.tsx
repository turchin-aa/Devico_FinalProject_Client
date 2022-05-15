import { call, takeEvery, put, Effect, SagaReturnType } from 'redux-saga/effects'
import { userSliceActions } from './user-slice'
import { sagaActions } from './saga-actions'
import AuthService from '../services/AuthService'

type RegisterServiceType = SagaReturnType<typeof AuthService.register>
type LoginServiceType = SagaReturnType<typeof AuthService.login>
type RefreshServerType = SagaReturnType<typeof AuthService.checkAuth>

const { setUser, toggleAuth, removeUser, unToggleAuth } = userSliceActions

export function* userSignUpSaga(action: Effect) {
  try {
    const { email, password } = action.payload
    const data: RegisterServiceType = yield call(AuthService.register, email, password)
    const { accessToken, id } = data.data
    yield put(setUser({ id }))
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
    yield put(setUser({ id }))
    localStorage.setItem('token', accessToken)
    yield put(toggleAuth())
  } catch (error) {
    console.log(error)
  }
}

export function* userLogoutSaga(action: Effect) {
  try {
    yield call(AuthService.logout)
    localStorage.removeItem('token')
    yield put(unToggleAuth())
    yield put(removeUser())
  } catch (error) {
    console.log(error)
  }
}

export function* userRefreshSaga(action: Effect) {
  try {
    const data: RefreshServerType = yield call(AuthService.checkAuth)
    const { accessToken, id } = data.data
    yield put(setUser({ id }))
    localStorage.setItem('token', accessToken)
    yield put(toggleAuth())
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.USER_SIGNUP_SAGA, userSignUpSaga)
  yield takeEvery(sagaActions.USER_LOGIN_SAGA, userLoginSaga)
  yield takeEvery(sagaActions.USER_LOGOUT_SAGA, userLogoutSaga)
  yield takeEvery(sagaActions.USER_REFRESH_SAGA, userRefreshSaga)
}
