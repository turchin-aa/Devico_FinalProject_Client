export type EventData = {
  id: string
  title: string
  date: string
  place: string
  discipline: string
  status: string
  series: string
  costOfParticipation: string
  registration: number
  eventInfo: string
  createdAt: string
  updatedAt: string
}[]

export type EventItem = {
  id: string
  title: string
  date: string
  place: string
  discipline: string
  status: string
  series: string
  costOfParticipation: string
  registration: number
  eventInfo: string
  createdAt: string
  updatedAt: string
}

export type UserData = {
  fullName: string
  birthday: string
  city: string
  address: string
  driverLicenseNum: string
  representiveFullName: string
  cellNumber: string
  representiveLicenseNum: string
  idNumber: string
  sportDriverLicenseNum: string
}
