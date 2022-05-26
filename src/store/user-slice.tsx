import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  isAuth: boolean
  email?: string
  id?: string
  isEmailSend: boolean
  avatar?: string
}

const initialState: SliceState = {
  isAuth: false,
  email: '',
  id: '',
  isEmailSend: false,
  avatar: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.avatar = action.payload.avatar
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
