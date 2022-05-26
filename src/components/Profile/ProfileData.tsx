import {
  Avatar,
  Stack,
  IconButton,
  InputAdornment,
  Box,
  Fab,
  TextField,
  OutlinedInput,
} from '@mui/material'
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
  // picture: yup.mixed().test('fileSize', 'The file is too large', value => {
  //   return value && value[0].size <= 2000000
  // }),
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
})

const img = ''

const ProfileData: FC = () => {
  const [passShow, setShow] = useState(false)

  const dispatch = useAppDispatch()
  const classes = useStyles()

  const onSubmit = async (values, { resetForm }) => {
    alert(values.fullName)
    dispatch({ type: sagaActions.USER_UPDATE_SAGA, payload: values })
    resetForm()
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const handleClickpassShow = useCallback(() => {
    setShow(!passShow)
  }, [passShow, setShow])

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Stack direction="row" sx={{ mt: '2%' }}>
        <Box flex={1} m={2}>
          <div className={classes.profileAvatarContainer}>
            <Avatar sx={{ height: '100%', width: '100%' }} alt="Remy Sharp" src={img} />
            <div className={classes.profileEditAvatar}>
              <label className={classes.label} htmlFor="icon-button-file">
                <input accept="image/*" id="icon-button-file" type="file" name="picture" hidden />
                <Fab color="primary" aria-label="upload picture" component="span">
                  <ModeEdit fontSize="large" />
                </Fab>
              </label>
            </div>
          </div>
          <div className={classes.errorContainer}>
            {formik.errors.picture && formik.touched.picture ? (
              <div>{formik.errors.picture}</div>
            ) : null}
          </div>
          <ProfileSubmitButton type="submit">Save</ProfileSubmitButton>
        </Box>
        <Box flex={3}>
          <Stack direction="column" className={classes.profileFormContainer}>
            <label className={classes.label} htmlFor="fullName">
              FULL NAME
            </label>
            <TextField
              name="fullName"
              fullWidth
              size="small"
              type="text"
              id="fullName"
              error={formik.errors.fullName && formik.touched.fullName ? true : false}
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.fullName && formik.touched.fullName ? (
                <div>{formik.errors.fullName}</div>
              ) : null}
            </div>

            <label className={classes.label} htmlFor="email">
              EMAIL*
            </label>
            <TextField
              name="email"
              size="small"
              type="email"
              id="email"
              required
              error={formik.errors.email && formik.touched.email ? true : false}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.email && formik.touched.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>

            <label className={classes.label} htmlFor="phone">
              PHONE
            </label>
            <TextField
              name="telephone"
              size="small"
              type="text"
              id="phone"
              error={formik.errors.telephone && formik.touched.telephone ? true : false}
              value={formik.values.telephone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.telephone && formik.touched.telephone ? (
                <div>{formik.errors.telephone}</div>
              ) : null}
            </div>

            <label className={classes.label} htmlFor="newPass">
              NEW PASSWORD
            </label>
            <OutlinedInput
              name="password"
              size="small"
              id="newPass"
              type={passShow ? 'text' : 'password'}
              error={formik.errors.password && formik.touched.password ? true : false}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickpassShow}
                    edge="end"
                  >
                    {passShow ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div className={classes.errorContainer}>
              {formik.errors.password && formik.touched.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>

            <label className={classes.label} htmlFor="confPass">
              CONFRIM NEW PASSWORD
            </label>
            <TextField
              name="confirmPassword"
              size="small"
              type="password"
              id="confPass"
              error={formik.errors.confirmPassword && formik.touched.confirmPassword ? true : false}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default memo(ProfileData)
