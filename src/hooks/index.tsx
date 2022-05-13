import axios, { AxiosRequestConfig } from 'axios'
import { AuthResponse } from '../services/AuthService'

const host = 'http://localhost:8000/api'

const api = axios.create({
  withCredentials: true,
  baseURL: host,
})

api.interceptors.request.use<AxiosRequestConfig>(config => {
  config!.headers!.Autorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

api.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config.isRetry) {
      originalRequest.isRetry = true
      try {
        const response = await api.get<AuthResponse>('/auth/refresh', { withCredentials: true })
        localStorage.setItem('token', response.data.accessToken)
        return api.request(originalRequest)
      } catch (error) {
        throw new Error('Unauthorize user')
      }
    }
    throw error
  },
)

export default api
