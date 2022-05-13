import { AxiosResponse } from 'axios'
import api from '../hooks/index'

export interface AuthResponse {
  accessToken: string
  id: string
}

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await api.post<AuthResponse>('/auth/login', { email, password })
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await api.post<AuthResponse>('/auth/register', { email, password })
  }

  static async logout(): Promise<void> {
    return await api.post('/auth/logout')
  }

  static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return await api.get<AuthResponse>('/auth/refresh', { withCredentials: true })
  }
}
