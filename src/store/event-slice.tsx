import { createSlice } from '@reduxjs/toolkit'

interface SliceState {
  id: string
  events: [
    {
      id: string
      title: string
      date: string
      place: string
      discipline: string
      status: string
      series: string
      costOfParticipation: string
      registration: number
      eventInfo: string
      createdAt: string
      updatedAt: string
    },
  ]
}

const initialState: SliceState = {
  id: '',
  events: [
    {
      id: '',
      title: '',
      date: '',
      place: '',
      discipline: '',
      status: '',
      series: '',
      costOfParticipation: '',
      registration: 0,
      eventInfo: '',
      createdAt: '',
      updatedAt: '',
    },
  ],
}

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent(state, action) {
      state.id = action.payload.id
      console.log(state.id)
    },
    getEvent(state, action) {
      state.events = action.payload.events
    },
    removeEvent(state) {},
  },
})

export const eventSliceActions = eventSlice.actions

export default eventSlice
