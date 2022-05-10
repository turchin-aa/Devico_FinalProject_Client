import * as yup from 'yup'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Dialog } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useHttp } from '../../myhook/http.hook'
import { useFormik } from 'formik'
import { RootState } from '../../store'
import { memo, useCallback } from 'react'
import { uiActions } from '../../store/ui-slice'
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
} from './SignUpStyles'
import { useDispatch, useSelector } from 'react-redux'

const theme = createTheme()

const SignUp = () => {
  const { loading, request } = useHttp()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      telephone: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required('Write correct email'),
      password: yup.string().min(8).max(32).required('Write correct password'),
      telephone: yup.string().min(10),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
      terms: yup.boolean().required().oneOf([true], 'Check'),
    }),
    onSubmit: async values => {
      try {
        await request('/api/auth/register', 'POST', { ...values })
      } catch (e) {}
    },
  })

  const regCartIsShown = useSelector<RootState, boolean>(state => state.ui.showReg)

  const toggleHandler = useCallback(() => {
    if (regCartIsShown) {
      dispatch(uiActions.toggleReg())
    }
  }, [dispatch, regCartIsShown])

  return (
    <Dialog open={regCartIsShown} onClose={toggleHandler}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ overflow: 'hidden' }}>
          <CssBaseline />
          <CBox>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
              Sign up
            </Typography>
            <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 2 }}></Box>
            <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FacebookButton type="button" variant="contained" fullWidth>
                    <Grid item xs={2}>
                      <Facebook />
                    </Grid>
                    <Grid item xs={12}>
                      CONNECT WITH FACEBOOK
                    </Grid>
                  </FacebookButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <GoogleButton type="button" variant="contained" fullWidth>
                    <Grid item xs={3}>
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
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>
                    TELEPHONE
                  </Typography>
                  <TextField
                    fullWidth
                    name="telephone"
                    id="telephone"
                    value={formik.values.telephone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.telephone && formik.touched.telephone ? (
                    <div>{formik.errors.telephone}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
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
                  <MyTypography>CONFIRM PASSWORD*</MyTypography>
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
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
                      <Typography
                        variant="body2"
                        sx={{ fontSize: 14, fontFamily: 'Lato', fontWeight: 40, color: '#595353' }}
                      >
                        I agree to &nbsp;
                        <Link
                          href="#"
                          sx={{
                            fontSize: 16,
                            fontFamily: 'Lato',
                            fontWeight: 40,
                            color: '#000000',
                          }}
                        >
                          Processing, use, dissemination and access to my personal data
                        </Link>
                      </Typography>
                    }
                  />
                  {formik.errors.terms && formik.touched.terms ? (
                    <div>{formik.errors.terms}</div>
                  ) : null}
                </Grid>
              </Grid>
              <RegisterButton disabled={loading} type="submit" fullWidth variant="contained">
                Sign Up
              </RegisterButton>
              <Grid container justifyContent="center">
                <Grid item>
                  <LinkTypography>
                    Already a member? &nbsp;
                    <SignLink href="/signin">Sign in</SignLink>
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

export default memo(SignUp)
