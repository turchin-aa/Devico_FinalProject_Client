import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook'
import { memo, useCallback, useState } from 'react'
import { uiActions } from '../../../store/ui-slice'
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Divider,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Facebook, MyTypography, RegisterButton, SideButton, styledDiv } from '../AuthStyles'
import { useAuthStyles } from '../useAuthStyles'
import clsx from 'clsx'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { signUpData } from '../formikAuth'
import ModalContainer from '../../Modal/ModalContainer'
import GoogleLogin from 'react-google-login'
import { sagaActions } from '../../../store/saga-actions'

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch()
  const classes = useAuthStyles()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = useCallback(() => {
    return setShowPassword(!showPassword)
  }, [showPassword])

  const onSubmit = useCallback(
    async (values: object, { resetForm }) => {
      dispatch({ type: signUpData.onSubmitType, payload: values })
      resetForm()
    },
    [dispatch],
  )

  const formik = useFormik({
    initialValues: signUpData.initialValues,
    validationSchema: signUpData.validationSchema,
    onSubmit,
  })

  const regCartIsShown = useAppSelector<boolean>(state => state.ui.showReg)

  const handleLogin = useCallback(
    values => {
      dispatch({ type: sagaActions.USER_GOOGLE_AUTH_SAGA, payload: values })
    },
    [dispatch],
  )

  return (
    <ModalContainer
      modalType="Sign up"
      dispatchAction={uiActions.toggleReg()}
      cartIsShown={regCartIsShown}
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
                buttonText="Sign up with Google"
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <div className={classes.leftTextField}>
              <MyTypography>TELEPHONE</MyTypography>
              <TextField
                fullWidth
                error={formik.errors.telephone && formik.touched.telephone ? true : false}
                name="telephone"
                id="telephone"
                value={formik.values.telephone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorMessege}>
                {formik.errors.telephone && formik.touched.telephone ? (
                  <div style={styledDiv}>{formik.errors.telephone}</div>
                ) : null}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
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
            <div className={classes.leftTextField}>
              <MyTypography>CONFIRM PASSWORD*</MyTypography>
              <OutlinedInput
                fullWidth
                error={
                  formik.errors.confirmPassword && formik.touched.confirmPassword ? true : false
                }
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorMessege}>
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                  <div style={styledDiv}>{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.formControl}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="terms"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                }
                label={
                  <Typography variant="body2">
                    <span className={classes.rememberSpan}>I agree to </span>
                    <Link href="#">
                      <span className={classes.rememberSpan} id="process">
                        Processing, use, dissemination and access to my personal data
                      </span>
                    </Link>
                  </Typography>
                }
              />
              <div className={classes.errorMessege} id="terms">
                {formik.errors.terms && formik.touched.terms ? (
                  <div style={styledDiv}>{formik.errors.terms}</div>
                ) : null}
              </div>
            </div>
          </Grid>
        </Grid>
        <RegisterButton type="submit" fullWidth variant="contained">
          Sign Up
        </RegisterButton>
      </Box>
    </ModalContainer>
  )
}

export default memo(SignUp)
