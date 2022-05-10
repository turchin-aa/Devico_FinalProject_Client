import * as yup from 'yup'
import { memo, useCallback } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useFormik } from 'formik'
import { useHttp } from '../../myhook/http.hook'
import { Dialog } from '@mui/material'
import { RootState } from '../../store'
import { uiActions } from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import {
  FacebookButton,
  CBox,
  GoogleButton,
  MyTypography,
  RegisterButton,
  LinkTypography,
  SignLink,
  Facebook,
  Google,
} from './SignInStyles'

const theme = createTheme()

const SignIn = () => {
  const { loading, request } = useHttp()

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required('Invalid login or password'),
      password: yup.string().min(8).max(32).required('Invalid login or password'),
    }),
    onSubmit: async values => {
      try {
        await request('/api/auth/login', 'POST', { ...values })
      } catch (e) {}
    },
  })

  const logCartIsShown = useSelector<RootState, boolean>(state => state.ui.showLog)

  const toggleHandler = useCallback(() => {
    if (logCartIsShown) {
      dispatch(uiActions.toggleLog())
    }
  }, [dispatch, logCartIsShown])

  return (
    <Dialog open={logCartIsShown} onClose={toggleHandler}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ overflow: 'hidden' }}>
          <CssBaseline />
          <CBox>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
              Sign in
            </Typography>
            <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 1 }}></Box>
            <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <FacebookButton type="button" variant="contained" fullWidth>
                    <Grid item xs={2}>
                      <Facebook />
                    </Grid>
                    <Grid item xs={12}>
                      CONNECT WITH FACEBOOK
                    </Grid>
                  </FacebookButton>
                </Grid>
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
                <Box
                  sx={{ height: '1px', width: '42%', background: '#E5E5E5', mt: 2, ml: 2, mr: 3 }}
                ></Box>
                <Typography>OR</Typography>
                <Box
                  sx={{ height: '1px', width: '36%', background: '#E5E5E5', mt: 2, ml: 3 }}
                ></Box>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>EMAIL*</Typography>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </Grid>

                <Grid item xs={12}>
                  <MyTypography>PASSWORD*</MyTypography>
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
                    <div>{formik.errors.password}</div>
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
                <Grid item xs={12} sm={6} sx={{ textAlign: 'right', mt: 0.5 }}>
                  <SignLink href="#">Forgot password?</SignLink>
                </Grid>
              </Grid>
              <RegisterButton disabled={loading} type="submit" fullWidth variant="contained">
                Sign In
              </RegisterButton>
              <Grid container justifyContent="center">
                <Grid item>
                  <LinkTypography>
                    No account? &nbsp;
                    <SignLink href="/signup">Sign up</SignLink>
                  </LinkTypography>
                </Grid>
              </Grid>
            </Box>
          </CBox>
        </Container>
      </ThemeProvider>
    </Dialog>
  )
}

export default memo(SignIn)
