import api from '../hooks/index'

export interface EventResponse {
  id: string
}

export default class EventPartisipationService {
  static async addRegEvent(date?: string, isFuture?: boolean, isResent?: boolean): Promise<any> {
    return await api.post('/participate', {})
  }
}
