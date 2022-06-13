import { call, takeEvery, put, Effect } from 'redux-saga/effects'
import { userSliceActions } from './user-slice'
import { sagaActions } from './saga-actions'
import { uiActions } from '../store/ui-slice'
import api from '../hooks'

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
  addRegEvent,
  setRegEvent,
  removeRegEvent,
} = userSliceActions

const {
  toggleLog,
  toggleReg,
  toggleCongratAuth,
  toggleCreateNewPassword,
  toggleShowEventReg,
  toggleShowCancelParticipation,
  toggleShowFormSubmited,
  toggleShowAddCar,
} = uiActions

export function* userSignUpSaga(action: Effect) {
  try {
    const { email, password } = action.payload
    const data = yield call(api.post, '/auth/register', { email, password })
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
    const data = yield call(api.post, '/auth/login', { email, password })
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
    yield call(api.post, '/auth/logout')
    localStorage.removeItem('token')
    yield put(unToggleAuth())
    yield put(removeUser())
  } catch (error) {
    console.log(error)
  }
}

export function* userRefreshSaga() {
  try {
    const data = yield call(api.post, '/auth/refresh')
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
    yield call(api.post, '/forgotPassword', { email })
    yield put(toggleEmailSend())
  } catch (error) {
    console.log(error)
  }
}

export function* userNewPassSaga(action: Effect) {
  try {
    const { password, token, id } = action.payload
    yield call(api.post, '/createNewPassword', { password, token, id })
    yield put(toggleCreateNewPassword())
    yield put(toggleLog())
  } catch (error) {
    console.log(error)
  }
}

export function* updateUserDataSaga(action: Effect) {
  try {
    const { email } = action.payload
    yield call(api.patch, '/updateUser', { ...action.payload })
    if (email) {
      yield put(setUser({ email }))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* userGetAvatarSaga(action: Effect) {
  try {
    const data = yield call(api.get, '/getAvatar')
    yield put(setAvatar({ avatar: data.data.imageUrl }))
  } catch (error) {
    console.log(error)
  }
}
export function* userGetDataSaga(action: Effect) {
  try {
    const data = yield call(api.get, '/')
    const { user } = data.data
    yield put(getUser({ user }))
  } catch (error) {
    console.log(error)
  }
}

export function* userAddCarSaga(action: Effect) {
  try {
    const data = yield call(api.post, '/addCar', { ...action.payload })
    yield put(addCar({ newCar: { ...data.data } }))
    yield put(toggleShowAddCar())
  } catch (error) {
    console.error(error)
  }
}

export function* userDeleteCarSaga(action: Effect) {
  try {
    yield call(api.delete, '/deleteCar', { data: { id: action.payload.id } })
    yield put(removeCar({ ...action.payload }))
  } catch (error) {
    console.error(error)
  }
}

export function* userGetCarsSaga(action: Effect) {
  try {
    const data = yield call(api.get, '/getCars')
    yield put(setCar({ cars: data.data }))
  } catch (error) {
    console.error(error)
  }
}

export function* userRegForEvent(action: Effect) {
  try {
    yield call(api.post, '/events/registerToEvent', { ...action.payload })
    yield put(addRegEvent({ newEventParticipation: { ...action.payload } }))
    yield put(toggleShowEventReg())
    yield put(toggleShowFormSubmited())
  } catch (error) {
    console.error(error)
  }
}

export function* getUsersEventsData(action: Effect) {
  try {
    const data = yield call(api.get, '/events/getUsersEvents', {})
    yield put(setRegEvent({ eventParticipation: data.data }))
  } catch (error) {
    console.error(error)
  }
}
export function* cancelRegistrationForEvent(action: Effect) {
  try {
    yield call(api.post, '/events/cancelUsersRegistration', { ...action.payload })
    yield put(removeRegEvent({ ...action.payload }))
    yield put(toggleShowCancelParticipation())
  } catch (error) {
    console.error(error)
  }
}

export function* userGoogleAuthSaga(action: Effect) {
  try {
    const data = yield call(api.post, '/auth/googleAuth', { tokenId: action.payload.tokenId })
    const { accessToken, id, email } = data.data
    yield put(setUser({ id, email }))
    yield put(toggleCongratAuth())
    yield put(toggleAuth())
    localStorage.setItem('token', accessToken)
  } catch (e) {
    console.error(e)
  }
}

export function* userAddLicenseSaga(action: Effect) {
  try {
    yield call(api.post, '/addLicense', { ...action.payload })
    yield put(toggleShowFormSubmited())
  } catch (e) {
    console.error(e)
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
  yield takeEvery(sagaActions.USER_REGISTER_FOR_EVENT_SAGA, userRegForEvent)
  yield takeEvery(sagaActions.USER_EVENTS_DATA_SAGA, getUsersEventsData)
  yield takeEvery(sagaActions.CANCEL_USER_REGISTRATION_SAGA, cancelRegistrationForEvent)
  yield takeEvery(sagaActions.USER_GOOGLE_AUTH_SAGA, userGoogleAuthSaga)
  yield takeEvery(sagaActions.USER_ADD_LICENSE_SAGA, userAddLicenseSaga)
}
