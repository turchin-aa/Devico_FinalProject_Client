import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  id: string
  isAuth: boolean
}

const initialState: SliceState = {
  id: '',
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
    },
    removeUser(state) {
      state.id = ''
    },
    toggleAuth(state) {
      state.isAuth = true
    },
    unToggleAuth(state) {
      state.isAuth = false
    },
  },
})

export const userSliceActions = userSlice.actions

export default userSlice
