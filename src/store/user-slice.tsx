import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../types/globalTypes'

interface SliceState {
  isAuth: boolean
  email?: string
  id?: string
  isEmailSend: boolean
  avatar?: string
  user: UserData
  cars: ICar[]
  eventParticipationList: IEventParticipation[]
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
export interface IEventParticipation {
  id: string
  eventId: string
  carId: string
  vehicleType: string
  desiredParticipantNumber: string
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
  cars: [],
  eventParticipationList: [
    {
      id: '',
      eventId: '',
      carId: '',
      vehicleType: '',
      desiredParticipantNumber: '',
    },
  ],
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
    addRegEvent(state, action) {
      return {
        ...state,
        eventParticipationList: [
          ...state.eventParticipationList,
          action.payload.newEventParticipation,
        ],
      }
    },
    setRegEvent(state, action) {
      state.eventParticipationList = action.payload.eventParticipation
    },
    removeRegEvent(state, action) {
      return {
        ...state,
        eventParticipationList: state.eventParticipationList.filter(
          eventParticipation => eventParticipation.eventId !== action.payload.id,
        ),
      }
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
