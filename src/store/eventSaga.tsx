import { call, takeEvery, put, Effect, SagaReturnType } from 'redux-saga/effects'
import EventService from '../services/EventService'
import { eventSliceActions } from './event-slice'
import { eventActions } from './saga-actions'

type GetServiceType = SagaReturnType<typeof EventService.getEvent>
const { getEvent, setEvent } = eventSliceActions

export function* eventGetSaga(action: Effect) {
  try {
    const data: GetServiceType = yield call(EventService.getEvent)
    const { events } = data.data
    yield put(getEvent({ events }))
  } catch (error) {
    console.log(error)
  }
}
export function* eventSetIdSaga(action: Effect) {
  try {
    const { id } = action.payload.eventItem
    yield put(setEvent({ id }))
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(eventActions.EVENT_GET_SAGA, eventGetSaga)
  yield takeEvery(eventActions.EVENT_SET_ID_SAGA, eventSetIdSaga)
}
