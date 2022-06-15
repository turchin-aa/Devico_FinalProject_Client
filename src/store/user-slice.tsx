import { createSlice } from '@reduxjs/toolkit'
import { socketType } from '../App'
import { UserData } from '../types/globalTypes'

interface SliceState {
  isAuth: boolean
  email?: string
  id?: string
  userRole: string
  isEmailSend: boolean
  avatar?: string
  user: UserData
  cars: ICar[]
  eventParticipationList: IEventParticipation[]
  socket: socketType | null
  notifications: INotification[]
}

export interface INotification {
  id: number
  color: object
  text: string
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
  userRole: '',
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
  eventParticipationList: [],
  socket: null,
  notifications: [
    {
      id: 1,
      color: {
        backgroundColor: 'red',
        height: 150,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 2,
      color: {
        backgroundColor: 'lime',
        height: 50,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 3,
      color: {
        backgroundColor: 'red',
        height: 150,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 4,
      color: {
        backgroundColor: 'lime',
        height: 50,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 5,
      color: {
        backgroundColor: 'red',
        height: 150,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 6,
      color: {
        backgroundColor: 'lime',
        height: 50,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 7,
      color: {
        backgroundColor: 'red',
        height: 150,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 8,
      color: {
        backgroundColor: 'lime',
        height: 50,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 9,
      color: {
        backgroundColor: 'red',
        height: 150,
      },
      text: 'wwerwerwerwerwerwerw',
    },
    {
      id: 10,
      color: {
        backgroundColor: 'lime',
        height: 50,
      },
      text: 'wwerwerwerwerwerwerw',
    },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSocket(state, action) {
      state.socket = action.payload.socket
    },
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.userRole = action.payload.userRole
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
      state.eventParticipationList.splice(
        state.eventParticipationList.findIndex(
          eventParticipation => eventParticipation.eventId == action.payload.id,
        ),
        1,
      )
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
    addNotification(state, action) {
      return {
        ...state,
        notifications: [...state.notifications, action.payload.newNotification],
      }
    },
    deleteNotificationById(state, action) {
      state.notifications.splice(
        state.notifications.findIndex(notification => notification.id === action.payload.id),
        1,
      )
    },
    deleteNotifications(state) {
      return {
        ...state,
        notifications: [],
      }
    },
  },
})

export const userSliceActions = userSlice.actions

export default userSlice
