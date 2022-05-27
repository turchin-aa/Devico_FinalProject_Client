import * as yup from 'yup'
import { sagaActions } from '../../store/saga-actions'

export const signInData = {
  initialValues: {
    email: '',
    password: '',
    rememberMe: false,
  },
  validationSchema: yup.object().shape({
    email: yup.string().email('Invalid format').required('Invalid login or password'),
    password: yup.string().min(8).max(32).required('Invalid login or password'),
  }),
  onSubmitType: sagaActions.USER_LOGIN_SAGA,
}

export const signUpData = {
  initialValues: {
    email: '',
    password: '',
    telephone: '',
    confirmPassword: '',
    terms: false,
  },
  validationSchema: yup.object().shape({
    email: yup.string().email('Write correct email').required('The email is required'),
    password: yup
      .string()
      .min(8, 'The length must be at least 8')
      .max(32)
      .required('The password is required'),
    telephone: yup
      .string()
      .matches(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        'Invalid telephone format',
      ),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    terms: yup.boolean().required().oneOf([true], 'Check the terms'),
  }),
  onSubmitType: sagaActions.USER_SIGNUP_SAGA,
}
