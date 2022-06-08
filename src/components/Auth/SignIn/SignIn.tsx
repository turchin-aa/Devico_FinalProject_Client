import { memo, useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { uiActions } from '../../../store/ui-slice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook'
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Divider,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import {
  MyTypography,
  RegisterButton,
  SignLink,
  styledDiv,
  SideButton,
  Facebook,
} from '../AuthStyles'
import { useAuthStyles } from '../useAuthStyles'
import clsx from 'clsx'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { signInData } from '../formikAuth'
import ModalContainer from '../../Modal/ModalContainer'
import GoogleLogin from 'react-google-login'
import { sagaActions } from '../../../store/saga-actions'

const SignIn = () => {
  const dispatch = useAppDispatch()
  const classes = useAuthStyles()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = useCallback(
    async (values: object, { resetForm }) => {
      dispatch({ type: signInData.onSubmitType, payload: values })
      resetForm()
    },
    [dispatch],
  )

  const formik = useFormik({
    initialValues: signInData.initialValues,
    validationSchema: signInData.validationSchema,
    onSubmit,
  })
  const logCartIsShown = useAppSelector<boolean>(state => state.ui.showLog)

  const showRecoverPasHandler = useCallback(() => {
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
    dispatch(uiActions.toggleForgetPassword())
  }, [dispatch, logCartIsShown])

  const handleClickShowPassword = useCallback(() => {
    return setShowPassword(!showPassword)
  }, [showPassword])

  const handleLogin = useCallback(
    values => {
      dispatch({ type: sagaActions.USER_GOOGLE_AUTH_SAGA, payload: values })
    },
    [dispatch],
  )

  return (
    <ModalContainer
      modalType="Sign In"
      dispatchAction={uiActions.toggleLog()}
      cartIsShown={logCartIsShown}
      resetForm={formik.resetForm}
      setPass={setShowPassword}
    >
      <Box component="form" onSubmit={formik.handleSubmit}>
        <div className={clsx(classes.flexCenter, classes.mobileView)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SideButton id="facebook" type="button" variant="contained" fullWidth>
                <Grid item xs={2}>
                  <Facebook />
                </Grid>
                <Grid item xs={12}>
                  CONNECT WITH FACEBOOK
                </Grid>
              </SideButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
                buttonText="CONNECT WITH GOOGLE"
                onSuccess={handleLogin}
                onFailure={err => console.error(err)}
                cookiePolicy="single_host_origin"
              ></GoogleLogin>
            </Grid>
          </Grid>
        </div>
        <div className={classes.divider}>
          <Divider variant="middle">OR</Divider>
        </div>
        <Grid item xs={12}>
          <MyTypography>EMAIL*</MyTypography>
          <TextField
            fullWidth
            error={formik.errors.email && formik.touched.email ? true : false}
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className={classes.errorMessege}>
            {formik.errors.email && formik.touched.email ? (
              <div style={styledDiv}>{formik.errors.email}</div>
            ) : null}
          </div>
        </Grid>
        <Grid item xs={12}>
          <MyTypography>PASSWORD*</MyTypography>
          <OutlinedInput
            fullWidth
            error={formik.errors.password && formik.touched.password ? true : false}
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div className={classes.errorMessege}>
            {formik.errors.password && formik.touched.password ? (
              <div style={styledDiv}>{formik.errors.password}</div>
            ) : null}
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.formControl} id="sign-in">
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  value={formik.values.rememberMe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              }
              label={
                <Typography variant="body2">
                  <span className={classes.rememberSpan}>Remember me</span>
                </Typography>
              }
            />
            <SignLink className={classes.forgotPass} onClick={showRecoverPasHandler}>
              Forgot password?
            </SignLink>
          </div>
        </Grid>
        <RegisterButton type="submit" fullWidth variant="contained">
          Sign In
        </RegisterButton>
      </Box>
    </ModalContainer>
  )
}

export default memo(SignIn)
