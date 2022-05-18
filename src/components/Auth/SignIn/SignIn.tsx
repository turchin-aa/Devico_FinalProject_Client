import * as yup from 'yup'
import { memo, useCallback } from 'react'
import { useFormik } from 'formik'
import { uiActions } from '../../../store/ui-slice'
import { sagaActions } from '../../../store/saga-actions'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hook'
import {
  createTheme,
  ThemeProvider,
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
} from '@mui/material'
import {
  FacebookButton,
  GoogleButton,
  MyTypography,
  RegisterButton,
  LinkTypography,
  SignLink,
  Facebook,
  Google,
  styledDiv,
} from '../AuthStyles'

const theme = createTheme()

const SignIn = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Invalid format').required('Invalid login or password'),
      password: yup.string().min(8).max(32).required('Invalid login or password'),
    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch({ type: sagaActions.USER_LOGIN_SAGA, payload: values })
      toggleHandler()
      resetForm()
    },
  })

  const logCartIsShown = useAppSelector(state => state.ui.showLog)

  const toggleHandler = useCallback(() => {
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
  }, [dispatch, logCartIsShown])

  const showRecoverPasHandler = () => {
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
    dispatch(uiActions.toggleForgetPassword())
  }

  const changeSignHandler = () => {
    dispatch(uiActions.toggleLog())
    dispatch(uiActions.toggleReg())
  }

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth open={logCartIsShown} onClose={toggleHandler}>
      <ThemeProvider theme={theme}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 'bold', fontSize: 26, textAlign: 'center', mt: 1, mb: 1 }}
        >
          Sign in
        </Typography>
        <Divider />
        <DialogContent>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <FacebookButton type="button" variant="contained" fullWidth>
              <Grid item xs={2}>
                <Facebook />
              </Grid>
              <Grid item xs={12}>
                CONNECT WITH FACEBOOK
              </Grid>
            </FacebookButton>
            <Grid item xs={12}>
              <GoogleButton type="button" variant="contained" fullWidth>
                <Grid item xs={2}>
                  <Google />
                </Grid>
                <Grid item xs={12}>
                  CONNECT WITH GOOGLE
                </Grid>
              </GoogleButton>
            </Grid>
            <Divider variant="middle" sx={{ mt: '12px' }}>
              OR
            </Divider>
            <Grid item xs={12}>
              <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mt: 1 }}>EMAIL*</Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <div style={styledDiv}>{formik.errors.email}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <MyTypography sx={{ mt: 2 }}>PASSWORD*</MyTypography>
              <TextField
                fullWidth
                name="password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <div style={styledDiv}>{formik.errors.password}</div>
              ) : null}
            </Grid>

            <Grid item xs={12} sm={6}>
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
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 14,
                      fontFamily: 'Lato',
                      fontWeight: 40,
                      color: '#595353',
                    }}
                  >
                    Remember me
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
              <SignLink onClick={showRecoverPasHandler}>Forgot password?</SignLink>
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
      </ThemeProvider>
    </Dialog>
  )
}

export default memo(SignIn)
