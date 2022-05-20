import api from '../hooks/index'

export interface EventResponse {
  id: string
}

export default class EventService {
  static async getEvent(date?: string, isFuture?: boolean, isResent?: boolean): Promise<any> {
    return await api.get('/events/', {})
  }
}
