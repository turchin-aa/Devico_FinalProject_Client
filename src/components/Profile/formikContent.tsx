import * as yup from 'yup'
import { sagaActions } from '../../store/saga-actions'

export const profileData = {
  initialValues: {
    fullName: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
  },
  validationSchema: yup.object().shape({
    fullName: yup.string().min(3).nullable(true),
    email: yup.string().email('Write correct email').nullable(true),
    password: yup.string().min(6, 'The length must be at least 6').max(32).nullable(true),
    telephone: yup
      .string()
      .matches(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        'Invalid telephone format',
      )
      .nullable(true),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .nullable(true),
  }),
  onSubmitType: sagaActions.USER_UPDATE_DATA_SAGA,
}

export const personalData = {
  initialValues: {
    nickName: '',
    birthday: new Date(),
    address: '',
    driverLicenseNum: 0,
    representiveFullName: '',
    cellNumber: '',
    representiveLicenseNum: 0,
    sportDriverLicenseNum: 0,
    idNumber: 0,
  },

  validationSchema: yup.object().shape({
    nickName: yup.string().min(3).nullable(true),
    representiveFullName: yup.string().min(3).nullable(true),
    representiveLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
    driverLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
    address: yup.string().min(5).nullable(true),
    sportDriverLicenseNum: yup.number().min(8).required('Write min 8 numbers'),
    idNumber: yup.number().min(8).required('Write min 8 numbers'),
    cellNumber: yup
      .string()
      .matches(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        'Invalid phone format',
      )
      .nullable(true),
    birthday: yup.date().required('Date is required'),
  }),
  onSubmitType: sagaActions.USER_UPDATE_DATA_SAGA,
}

export const addCarsData = {
  initialValues: {
    id: 1,
    model: '',
    year: 1960,
    capacityEngine: '',
    regVehNumber: '',
    techPassNumber: 0,
    vinNumber: 0,
    driveTrain: '',
    fullName: '',
  },

  validationSchema: yup.object().shape({
    id: yup.number(),
    fullName: yup.string().min(3),
    model: yup.string().min(4).required('Write model, min 4 characters'),
    year: yup
      .number()
      .min(1960)
      .positive()
      .required('Write year of the car, it must me greater than 1960'),
    capacityEngine: yup.string().min(2).required('Write capicicty engine'),
    regVehNumber: yup.string().min(4).required('Vehicle humber must contain at least 4 number'),
    techPassNumber: yup.number().min(1000).required('Tech pass must contain at least 4 number'),
    vinNumber: yup.number().min(1000).required('Vin number must contain at least 4 number'),
    driveTrain: yup.string().min(4).required('Drive train must contain at least 4 number'),
  }),
  onSubmitType: '',
}

export const recoverPassData = {
  initialValues: {
    email: '',
  },
  validationSchema: yup.object().shape({
    email: yup.string().email('Invalid format').required('Invalid email'),
  }),
  onSubmitType: sagaActions.USER_RESET_SAGA,
}

export const createNewPassData = {
  initialValues: {
    password: '',
    confirmPassword: '',
  },

  validationSchema: yup.object().shape({
    password: yup
      .string()
      .min(6, 'The length must be at least 6')
      .max(32)
      .required('The password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  }),
  onSubmitType: sagaActions.USER_NEWPASS_SAGA,
}
