import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  showReg: boolean
  showLog: boolean
  showForgetPassword: boolean
  showCreateNewPassword: boolean
  congratAuth: boolean
  showAddCar: boolean
  showEventReg: boolean
  showCancelParticipation: boolean
}

const initialState: SliceState = {
  showReg: false,
  showLog: false,
  showForgetPassword: false,
  showCreateNewPassword: true,
  congratAuth: false,
  showAddCar: false,
  showEventReg: false,
  showCancelParticipation: false,
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
    toggleCreateNewPassword(state) {
      state.showCreateNewPassword = !state.showCreateNewPassword
    },
    toggleCongratAuth(state) {
      state.congratAuth = !state.congratAuth
    },
    toggleShowAddCar(state) {
      state.showAddCar = !state.showAddCar
    },
    toggleShowEventReg(state) {
      state.showEventReg = !state.showEventReg
    },
    toggleShowCancelParticipation(state) {
      state.showCancelParticipation = !state.showCancelParticipation
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice
