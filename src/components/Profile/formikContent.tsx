import * as yup from 'yup'
import { sagaActions } from '../../store/saga-actions'

export const profileData = {
  initialValues: {
    picture: null,
    fullName: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
  },

  validationSchema: yup.object().shape({
    picture: yup.mixed().test('fileSize', 'The file is too large', value => {
      return value && value[0].size <= 2000000
    }),
    fullName: yup.string().min(3).nullable(true),
    email: yup.string().email('Write correct email').required('The email is required'),
    password: yup.string().min(8, 'The length must be at least 8').max(32).nullable(true),
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
  onSubmitType: sagaActions.USER_UPDATE_SAGA,
}
