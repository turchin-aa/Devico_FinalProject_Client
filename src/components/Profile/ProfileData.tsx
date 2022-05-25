import { Avatar, Stack, IconButton, InputAdornment, Box, Fab } from '@mui/material'
import useStyles, { ProfileSubmitButton } from './ProfileStyles'
import { Field, Form, Formik, ErrorMessage, useFormik } from 'formik'
import * as yup from 'yup'
import { FC, memo, useCallback, useState } from 'react'
import { Visibility, VisibilityOff, ModeEdit } from '@mui/icons-material'
import { useAppDispatch } from '../../hooks/redux.hook'
import { sagaActions } from '../../store/saga-actions'

const initialValues = {
  picture: null,
  fullName: '',
  email: '',
  telephone: '',
  password: '',
  confirmPassword: '',
}

const validationSchema = yup.object().shape({
  picture: yup.mixed().test('fileSize', 'The file is too large', value => {
    return value && value[0].size <= 2000000
  }),
  fullName: yup.string().min(3).nullable(true),
  email: yup.string().email('Write correct email').required('The email is required'),
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
})

const ProfileData: FC = () => {
  const [passShow, setShow] = useState(false)

  const dispatch = useAppDispatch()
  const classes = useStyles()

  const onSubmit = async (values, { resetForm }) => {
    dispatch({ type: sagaActions.USER_UPDATE_SAGA, payload: values })
    resetForm()
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const handleClickpassShow = useCallback(() => {
    setShow(!passShow)
  }, [passShow, setShow])
  const img =
    'https://decider.com/wp-content/uploads/2022/03/the-girl-from-plainville-glee.jpg?quality=75&strip=all&w=1200'

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Stack direction="row" sx={{ mt: '2%' }}>
            <Box flex={1} m={2}>
              <div className={classes.profileAvatarContainer}>
                <Avatar
                  sx={{ height: '100%', width: '100%' }}
                  // className={classes.profileAvatar}
                  alt="Remy Sharp"
                  src={img}
                />
                <div className={classes.profileEditAvatar}>
                  <label className={classes.label} htmlFor="icon-button-file">
                    <input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      name="picture"
                      hidden
                    />
                    <Fab color="primary" aria-label="upload picture" component="span">
                      <ModeEdit fontSize="large" />
                    </Fab>
                  </label>
                </div>
              </div>
              <ProfileSubmitButton loading={isSubmitting} disabled={isSubmitting} type="submit">
                Save
              </ProfileSubmitButton>
            </Box>
            <Box flex={3}>
              <Stack direction="column" className={classes.profileFormContainer}>
                <label className={classes.label} htmlFor="fullName">
                  FULL NAME
                </label>
                <Field
                  className={classes.textField}
                  name="fullName"
                  type="text"
                  fullWidth
                  id="fullName"
                  variant="outlined"
                />
                <div className={classes.errorContainer}>
                  <ErrorMessage name="fullName" component="div" />
                </div>
                <label className={classes.label} htmlFor="email">
                  EMAIL*
                </label>
                <Field
                  className={classes.textField}
                  name="email"
                  type="email"
                  required
                  fullWidth
                  id="email"
                  variant="outlined"
                />
                <div className={classes.errorContainer}>
                  <ErrorMessage name="email" component="div" />
                </div>
                <label className={classes.label} htmlFor="phone">
                  PHONE
                </label>
                <Field
                  className={classes.textField}
                  name="telephone"
                  type="text"
                  fullWidth
                  id="phone"
                  variant="outlined"
                />
                <div className={classes.errorContainer}>
                  <ErrorMessage name="telephone" component="div" />
                </div>
                <label className={classes.label} htmlFor="newPass">
                  NEW PASSWORD
                </label>
                <Field
                  className={classes.textField}
                  name="password"
                  type={passShow ? 'text' : 'password'}
                  fullWidth
                  id="newPass"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickpassShow}
                          onMouseDown={e => e.preventDefault()}
                          edge="end"
                        >
                          {passShow ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className={classes.errorContainer}>
                  <ErrorMessage name="password" component="div" />
                </div>
                <label className={classes.label} htmlFor="confPass">
                  CONFRIM NEW PASSWORD
                </label>
                <Field
                  className={classes.textField}
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  id="confPass"
                  variant="outlined"
                />
                <div className={classes.errorContainer}>
                  <ErrorMessage name="confirmPassword" component="div" />
                </div>
              </Stack>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default memo(ProfileData)
