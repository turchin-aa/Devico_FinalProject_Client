import * as yup from 'yup'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useHttp } from '../../myhook/http.hook'
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

export default function SignIn() {
  const { loading, request } = useHttp()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const schema = yup.object().shape({
    email: yup.string().email().required('Write correct email'),
    password: yup.string().min(8).max(32).required('Write correct password'),
  })

  const handleChange = (event: any) => {
    event.preventDefault()
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const loginHandler = async () => {
    try {
      await request('/api/auth/login', 'POST', { ...form })
      reset()
    } catch (e) {}
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <CBox>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
            Sign in
          </Typography>
          <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 1 }}></Box>
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(loginHandler)}>
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
              <Box sx={{ height: '1px', width: '36%', background: '#E5E5E5', mt: 2, ml: 3 }}></Box>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>EMAIL*</Typography>
                <TextField
                  {...register('email')}
                  required
                  fullWidth
                  id="email"
                  name="email"
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                />
              </Grid>

              <Grid item xs={12}>
                <MyTypography>PASSWORD*</MyTypography>
                <TextField
                  {...register('password')}
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  error={Boolean(errors.password)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={<Checkbox required value="allowExtraEmails" />}
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
            <RegisterButton
              onClick={loginHandler}
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
            >
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
  )
}
export {}
