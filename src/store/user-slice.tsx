import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  isAuth: boolean
  email?: string
  id?: string
  isEmailSend: boolean
  avatar?: string
  cars: ICar[]
}

export interface ICar {
  id: number
  model: string
  year: string
  capacityEngine: string
  regVehNumber: string
  techPassNumber: string
  vinNumber: string
  driveTrain: string
  fullNameOwner: string
}

const initialState: SliceState = {
  isAuth: false,
  email: '',
  id: '',
  isEmailSend: false,
  avatar: '',
  cars: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
    },
    addCar(state, action) {
      return {
        ...state,
        cars: [...state.cars, action.payload.newCar],
      }
    },
    setCar(state, action) {
      return { ...state, cars: [...action.payload.cars] }
    },
    removeCar(state, action) {
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.payload.id),
      }
    },
    setAvatar(state, action) {
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
