import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Incorrect format').required('E-mail is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, '​Password must be at least 4 characters'),
  passwordConfirm: yup
    .string()
    .required('Passwords does not match')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  termsCheck: yup
    .boolean()
    .oneOf([true], 'Required terms of use')
    .required('Required terms of use'),
})

export default schema
