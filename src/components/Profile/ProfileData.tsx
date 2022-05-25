import { Avatar, Stack, IconButton, InputAdornment, Badge } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import useStyles, { ProfileSubmitButton } from './ProfileStyles'
import { Box } from '@mui/system'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { sagaActions } from '../../store/saga-actions'
import axios from 'axios'
import api from '../../hooks'

const ProfileData: FC = () => {
  const [passShow, setShow] = useState(false)
  const [formDataPicture, setFormDataPicture] = useState('')
  const [previewPicture, setPreviewPicture] = useState('')

  const dispatch = useAppDispatch()
  const email = useAppSelector<string | undefined>(state => state.user.email)

  const classes = useStyles()

  const handleChangeAvatar = e => {
    setFormDataPicture(e.target.files[0])
    setPreviewPicture(URL.createObjectURL(e.target.files[0]))
  }

  const onUploadAvatar = useCallback(async () => {
    try {
      const url: string = await api.get('/s3Url').then(res => res.data.url)

      const file = formDataPicture

      await axios.put(url, file)

      const imageUrl = url.split('?')[0]

      await api.patch('/updateAvatar', { imageUrl })
    } catch (error) {
      console.log(error)
    }
  }, [formDataPicture])

  const getUserInfoHandler = useCallback(async () => {
    const req = await api.get('/getAvatar')

    setPreviewPicture(req.data.imageUrl)
  }, [])

  useEffect(() => {
    if (!previewPicture) {
      getUserInfoHandler()
    }
  }, [getUserInfoHandler, previewPicture])

  const handleClickpassShow = useCallback(() => {
    setShow(!passShow)
  }, [passShow, setShow])

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        telephone: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={yup.object().shape({
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
      })}
      onSubmit={async (values, { resetForm }) => {
        dispatch({ type: sagaActions.USER_UPDATE_PROFILE_SAGA, payload: values })
        resetForm({
          values: {
            fullName: values.fullName,
            email: values.email,
            telephone: values.telephone,
            password: '',
            confirmPassword: '',
          },
        })
        if (formDataPicture) {
          onUploadAvatar()
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack direction="row" sx={{ mt: '2%' }}>
            <Box flex={1} m={2}>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<ModeEditIcon sx={{ height: '30px', width: '30px' }} />}
              >
                <label className={classes.label} htmlFor="icon-button-file">
                  <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    name="picture"
                    hidden
                    onChange={handleChangeAvatar}
                  />
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <Avatar
                      src={previewPicture}
                      alt="Remy Sharp"
                      sx={{ height: '180px', width: '180px' }}
                    />
                  </IconButton>
                </label>
              </Badge>
              <ProfileSubmitButton disabled={isSubmitting} type="submit">
                Save
              </ProfileSubmitButton>
            </Box>
            <Box flex={3}>
              <Stack direction="column" sx={{ width: '350px' }}>
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
                <ErrorMessage className={classes.error} name="fullName" component="div" />
                <label className={classes.label} htmlFor="email">
                  EMAIL
                </label>
                <Field
                  placeholder={email}
                  className={classes.textField}
                  name="email"
                  type="email"
                  required
                  fullWidth
                  id="email"
                  variant="outlined"
                />
                <ErrorMessage className={classes.error} name="email" component="div" />
                <label className={classes.label} htmlFor="phone">
                  PHONE
                </label>
                <Field
                  className={classes.textField}
                  name="telephone"
                  type="text"
                  fullWidth
                  id="telephone"
                  variant="outlined"
                />
                <ErrorMessage className={classes.error} name="telephone" component="div" />
                <label className={classes.label} htmlFor="password">
                  NEW PASSWORD
                </label>
                <Field
                  className={classes.textField}
                  name="password"
                  type={passShow ? 'text' : 'password'}
                  fullWidth
                  id="password"
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
                <ErrorMessage className={classes.error} name="password" component="div" />
                <label className={classes.label} htmlFor="confirmPassword">
                  CONFRIM NEW PASSWORD
                </label>
                <Field
                  className={classes.textField}
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  id="confirmPassword"
                  variant="outlined"
                />
                <ErrorMessage className={classes.error} name="confirmPassword" component="div" />
              </Stack>
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default memo(ProfileData)
