import { memo, useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { uiActions } from '../../../store/ui-slice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook'
import {
  Dialog,
  DialogContent,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Divider,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material'
import {
  SideButton,
  MyTypography,
  RegisterButton,
  LinkTypography,
  SignLink,
  Facebook,
  Google,
  styledDiv,
  CloseButton,
} from '../AuthStyles'
import { useAuthStyles } from '../useAuthStyles'
import { theme } from '../../../theme/CustomTheme'
import clsx from 'clsx'
import { Visibility, VisibilityOff, Close } from '@mui/icons-material'
import { signInData } from '../formikAuth'

const initialValues = signInData.initialValues
const validationSchema = signInData.validationSchema

const SignIn = () => {
  const dispatch = useAppDispatch()
  const classes = useAuthStyles()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = useCallback(async (values: object, { resetForm }) => {
    dispatch({ type: signInData.onSubmitType, payload: values })
    resetForm()
  }, [])

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const logCartIsShown = useAppSelector<boolean>(state => state.ui.showLog)

  const toggleHandler = useCallback(() => {
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
    formik.resetForm()
    setShowPassword(false)
  }, [dispatch, logCartIsShown])

  const showRecoverPasHandler = useCallback(() => {
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
    dispatch(uiActions.toggleForgetPassword())
  }, [])

  const handleClickShowPassword = useCallback(() => {
    return setShowPassword(!showPassword)
  }, [showPassword])

  const changeSignHandler = useCallback(() => {
    dispatch(uiActions.toggleLog())
    dispatch(uiActions.toggleReg())
  }, [])

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth open={logCartIsShown} onClose={toggleHandler}>
      <Typography component="h1" variant="h5" className={classes.flexCenter}>
        <p className={classes.titleTypo}> Sign in </p>
        <CloseButton onClick={toggleHandler}>
          <Close />
        </CloseButton>
      </Typography>
      <Divider />
      <DialogContent>
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
                <SideButton id="google" type="button" variant="contained" fullWidth>
                  <Grid item xs={2}>
                    <Google />
                  </Grid>
                  <Grid item xs={12}>
                    CONNECT WITH GOOGLE
                  </Grid>
                </SideButton>
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
          <Grid container justifyContent="center">
            <Grid item>
              <LinkTypography>
                No account? &nbsp;
                <SignLink onClick={changeSignHandler}>Sign up</SignLink>
              </LinkTypography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default memo(SignIn)
