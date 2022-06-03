import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../types/globalTypes'

interface SliceState {
  isAuth: boolean
  email?: string
  id?: string
  isEmailSend: boolean
  avatar?: string
  user: UserData
}

const initialState: SliceState = {
  isAuth: false,
  email: '',
  id: '',
  isEmailSend: false,
  avatar: '',
  user: {
    fullName: '',
    birthday: '',
    city: '',
    address: '',
    driverLicenseNum: '',
    representiveFullName: '',
    cellNumber: '',
    representiveLicenseNum: '',
    idNumber: '',
    sportDriverLicenseNum: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
    },

    setAvatar(state, action) {
      state.avatar = action.payload.avatar
    },
    getUser(state, action) {
      state.user = action.payload.user
    },
    removeUser(state) {
      state.email = ''
      state.id = ''
      state.avatar = ''
    },
    toggleAuth(state) {
      state.isAuth = true
    },
    unToggleAuth(state) {
      state.isAuth = false
    },
    toggleEmailSend(state) {
      state.isEmailSend = true
    },
    unToggleEmailSend(state) {
      state.isEmailSend = false
    },
  },
})

export const userSliceActions = userSlice.actions

export default userSlice
