import api from '../hooks/index'

export default class UserService {
  static async updateProfileData(
    fullName?: string,
    email?: string,
    telephone?: string,
    password?: string,
  ): Promise<void> {
    return await api.patch('/updateProfile', {
      fullName,
      email,
      telephone,
      password,
    })
  }

  static async updatePersonalData(
    nickName?: string,
    birthday?: Date,
    address?: string,
    driverLicenseNum?: number,
    representiveFullName?: string,
    cellNumber?: string,
    representiveLicenseNum?: number,
    sportDriverLicenseNum?: number,
    idNumber?: number,
    city?: string,
  ): Promise<void> {
    return await api.patch('/updatePersonal', {
      nickName,
      birthday,
      address,
      driverLicenseNum,
      representiveFullName,
      cellNumber,
      representiveLicenseNum,
      sportDriverLicenseNum,
      idNumber,
      city,
    })
  }
}
