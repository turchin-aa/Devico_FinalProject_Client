import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  showReg: boolean
  showLog: boolean
  showForgetPassword: boolean
  congratAuth: boolean
  isUserAuth: boolean
}

const initialState: SliceState = {
  showReg: false,
  showLog: false,
  showForgetPassword: false,
  isUserAuth: true,
  congratAuth: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleReg(state) {
      state.showReg = !state.showReg
    },
    toggleLog(state) {
      state.showLog = !state.showLog
    },
    toggleForgetPassword(state) {
      state.showForgetPassword = !state.showForgetPassword
    },
    toggleAuth(state) {
      state.isUserAuth = !state.isUserAuth
    },
    toggleCongratAuth(state) {
      state.congratAuth = !state.congratAuth
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice
