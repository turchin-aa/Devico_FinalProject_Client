import api from '../hooks/index'

export default class PasswordService {
  static async resetPass(email: string): Promise<void> {
    return await api.post('/forgotPassword', { email })
  }
  static async createNewPass(password: string, token: string, id: string): Promise<void> {
    return await api.post('/createNewPassword', { password, token, id })
  }
}
