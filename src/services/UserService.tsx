import api from '../hooks/index'

export default class UserService {
  static async updateUser(
    email?: string,
    phone?: string,
    newPassword?: string,
    fullName?: string,
    city?: string,
    birthdayDate?: string,
    driverLicenseNum?: number,
    regAddress?: string,
    representiveLicenseNum?: string,
    fullNameOf?: string,
    idNumber?: number,
  ): Promise<void> {
    return await api.patch('/updateUser', {
      email,
      phone,
      newPassword,
      fullName,
      city,
      birthdayDate,
      driverLicenseNum,
      regAddress,
      representiveLicenseNum,
      fullNameOf,
      idNumber,
    })
  }
}
