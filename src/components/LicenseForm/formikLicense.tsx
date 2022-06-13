import * as yup from 'yup'
import { sagaActions } from '../../store/saga-actions'

const nameRegexLatin = /^[A-Za-z]+$/

export const formData = {
  initialValues: {
    fullNameLatin: '',
    fullNameUkrainian: '',
    dob: '',
    nativeCity: '',
    address: '',
    identificationNum: null,
    email: '',
    phone: '',
    license: '',
  },
  validationSchema: yup.object().shape({
    fullNameLatin: yup
      .string()
      .matches(nameRegexLatin, 'You can use only English letters')
      .min(8, 'Name should be at least 8 characters')
      .required('This field is required'),
    fullNameUkrainian: yup
      .string()
      .min(8, 'Name should be at least 8 characters')
      .required('This field is required'),
    dob: yup.date().nullable(true),
    nativeCity: yup.string().nullable(true),
    address: yup.string().min(5).nullable(true),
    identificationNum: yup.number().nullable(true),
    email: yup.string().email('Write correct email').nullable(true),
    phone: yup
      .string()
      .matches(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        'Invalid telephone format',
      ),
  }),
  onSubmitType: sagaActions.USER_ADD_LICENSE_SAGA,
}
