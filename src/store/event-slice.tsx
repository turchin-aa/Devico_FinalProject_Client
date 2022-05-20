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
      state.events = action.payload.events
    },
    removeEvent(state) {
      state.id = ''
    },
  },
})

export const eventSliceActions = eventSlice.actions

export default eventSlice
