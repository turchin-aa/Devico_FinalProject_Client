import { call, takeEvery, put, Effect, SagaReturnType } from 'redux-saga/effects'
import EventService from '../services/EventService'
import { eventSliceActions } from './event-slice'
import { eventActions } from './saga-actions'

type GetServiceType = SagaReturnType<typeof EventService.getEvent>
const { setEvent } = eventSliceActions

export function* eventGetSaga(action: Effect) {
  try {
    const data: GetServiceType = yield call(EventService.getEvent)
    const { events } = data.data
    yield put(setEvent({ events }))
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(eventActions.EVENT_GET_SAGA, eventGetSaga)
}
