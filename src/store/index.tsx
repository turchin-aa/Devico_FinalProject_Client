import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import uiSlice from './ui-slice'
import userSlice from './user-slice'
import eventSlice from './event-slice'
import eventSaga from './eventSaga'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

let sagaMiddleware = createSagaMiddleware()
let eventSagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { ui: uiSlice.reducer, user: userSlice.reducer, event: eventSlice.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware,
      eventSagaMiddleware,
    ),
  devTools: true,
})

sagaMiddleware.run(saga)
eventSagaMiddleware.run(eventSaga)

export default store
