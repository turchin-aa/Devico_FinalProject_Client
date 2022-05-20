import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import uiSlice from './ui-slice'
import userSlice from './user-slice'
import eventSlice from './event-slice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

let sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { ui: uiSlice.reducer, user: userSlice.reducer, event: eventSlice.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: true,
})

sagaMiddleware.run(saga)

export default store
