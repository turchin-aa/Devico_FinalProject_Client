import { call, takeEvery, put, Effect, SagaReturnType } from 'redux-saga/effects'
import { userSliceActions } from './user-slice'
import { sagaActions } from './saga-actions'
import AuthService from '../services/AuthService'
import PasswordService from '../services/PasswordService'
import { uiActions } from '../store/ui-slice'
import api from '../hooks'

type RegisterServiceType = SagaReturnType<typeof AuthService.register>
type LoginServiceType = SagaReturnType<typeof AuthService.login>
type RefreshServerType = SagaReturnType<typeof AuthService.checkAuth>

const {
  setUser,
  setAvatar,
  toggleAuth,
  removeUser,
  unToggleAuth,
  toggleEmailSend,
  getUser,
  addCar,
  removeCar,
  setCar,
} = userSliceActions

const {
  toggleLog,
  toggleReg,
  toggleCongratAuth,
  toggleCreateNewPassword,
  toggleShowEventReg,
  toggleShowCancelParticipation,
  toggleShowAddCar,
} = uiActions

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
    const avatar = yield call(async () => {
      return await api.get('/getAvatar')
    })
    yield put(setAvatar({ avatar: avatar.data.imageUrl }))
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

export function* userGetAvatarSaga(action: Effect) {
  try {
    const data = yield call(async () => {
      return await api.get('/getAvatar')
    })
    yield put(setAvatar({ avatar: data.data.imageUrl }))
  } catch (error) {
    console.log(error)
  }
}
export function* userGetDataSaga(action: Effect) {
  try {
    const data = yield call(async () => {
      return await api.get('/')
    })
    const { user } = data.data
    yield put(getUser({ user }))
  } catch (error) {
    console.log(error)
  }
}

export function* userAddCarSaga(action: Effect) {
  try {
    yield call(async () => {
      return await api.post('/addCar', { ...action.payload })
    })
    yield put(addCar({ newCar: { ...action.payload } }))
    yield put(toggleShowAddCar())
  } catch (error) {
    console.error(error)
  }
}

export function* userDeleteCarSaga(action: Effect) {
  try {
    yield call(async () => {
      return await api.post('/deleteCar', { ...action.payload })
    })
    yield put(removeCar({ ...action.payload }))
  } catch (error) {
    console.error(error)
  }
}

export function* userGetCarsSaga(action: Effect) {
  try {
    const data = yield call(async () => {
      return await api.get('/getCars')
    })
    yield put(setCar({ cars: data.data }))
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.USER_SIGNUP_SAGA, userSignUpSaga)
  yield takeEvery(sagaActions.USER_LOGIN_SAGA, userLoginSaga)
  yield takeEvery(sagaActions.USER_LOGOUT_SAGA, userLogoutSaga)
  yield takeEvery(sagaActions.USER_REFRESH_SAGA, userRefreshSaga)
  yield takeEvery(sagaActions.USER_NEWPASS_SAGA, userNewPassSaga)
  yield takeEvery(sagaActions.USER_RESET_SAGA, userResetPassSaga)
  yield takeEvery(sagaActions.USER_UPDATE_DATA_SAGA, updateUserDataSaga)
  yield takeEvery(sagaActions.USER_GET_AVATAR_SAGA, userGetAvatarSaga)
  yield takeEvery(sagaActions.USER_GET_DATA_SAGA, userGetDataSaga)
  yield takeEvery(sagaActions.USER_ADD_CAR_SAGA, userAddCarSaga)
  yield takeEvery(sagaActions.USER_DELETE_CAR_SAGA, userDeleteCarSaga)
  yield takeEvery(sagaActions.USER_GET_CARS_SAGA, userGetCarsSaga)
}
