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
import { useFormik } from 'formik'
import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { Visibility, VisibilityOff, ModeEdit } from '@mui/icons-material'
import { sagaActions } from '../../store/saga-actions'
import axios from 'axios'
import api from '../../hooks'
import { userSliceActions } from '../../store/user-slice'
import { profileData } from './formikContent'

const ProfileData: FC = () => {
  const [passShow, setShow] = useState(false)
  const [formDataPicture, setFormDataPicture] = useState('')

  const dispatch = useAppDispatch()
  const avatar = useAppSelector<string | undefined>(state => state.user.avatar)

  const classes = useStyles()

  const handleChangeAvatar = e => {
    setFormDataPicture(e.target.files[0])
    dispatch(userSliceActions.setAvatar({ avatar: URL.createObjectURL(e.target.files[0]) }))
  }

  const onUploadAvatar = useCallback(async () => {
    try {
      const url: string = await api.get('/s3Url').then(res => res.data.url)

      const file = formDataPicture

      await axios.put(url, file)

      const imageUrl = url.split('?')[0]

      await api.patch('/updateAvatar', { imageUrl })
      dispatch(userSliceActions.setAvatar({ avatar: imageUrl }))
    } catch (error) {
      console.log(error)
    }
  }, [formDataPicture, dispatch])

  useEffect(() => {
    if (!avatar) {
      dispatch({ type: sagaActions.USER_GET_AVATAR_SAGA })
    }
  }, [dispatch, avatar])

  const onSubmit = async (values, { resetForm }) => {
    dispatch({ type: profileData.onSubmitType, payload: { ...values, role: 'user' } })
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
  }

  const formik = useFormik({
    initialValues: profileData.initialValues,
    validationSchema: profileData.validationSchema,
    onSubmit,
  })

  const handleClickpassShow = useCallback(() => {
    setShow(!passShow)
  }, [passShow, setShow])

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Stack direction="row" sx={{ mt: '2%' }}>
        <Box flex={1} m={2}>
          <div className={classes.profileAvatarContainer}>
            <Avatar
              sx={{ height: '100%', width: '100%' }}
              alt="Remy Sharp"
              src={avatar ? avatar : ''}
            />
            <div className={classes.profileEditAvatar}>
              <label className={classes.label} htmlFor="icon-button-file">
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  name="picture"
                  hidden
                  onChange={handleChangeAvatar}
                />
                <Fab color="primary" aria-label="upload picture" component="span">
                  <ModeEdit fontSize="large" />
                </Fab>
              </label>
            </div>
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
