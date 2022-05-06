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
} from './SignUpStyles'

const theme = createTheme()

export default function SignUp() {
  const schema = yup.object().shape({
    email: yup.string().email().required('Write correct email'),
    password: yup.string().min(8).max(32).required('Write correct password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const { loading, request } = useHttp()

  const [form, setForm] = useState({
    email: '',
    password: '',
    telephone: '',
  })

  const handleChange = (event: any) => {
    event.preventDefault()
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      await request('/api/auth/register', 'POST', { ...form })
      reset()
    } catch (e) {}
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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <CBox>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
            Sign up
          </Typography>
          <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 2 }}></Box>
          <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit(registerHandler)}>
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
              <Box sx={{ height: '1px', width: '36%', background: '#E5E5E5', mt: 2, ml: 3 }}></Box>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>EMAIL*</Typography>
                <TextField
                  {...register('email')}
                  required
                  fullWidth
                  id="email"
                  name="email"
                  error={Boolean(errors.email)}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>TELEPHONE</Typography>
                <TextField fullWidth name="telephone" id="telephone" onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MyTypography>PASSWORD*</MyTypography>
                <TextField
                  {...register('password')}
                  fullWidth
                  required
                  name="password"
                  type="password"
                  id="password"
                  error={Boolean(errors.password)}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MyTypography>CONFIRM PASSWORD*</MyTypography>
                <TextField
                  {...register('confirmPassword')}
                  required
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  error={Boolean(errors.confirmPassword)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox required value="allowExtraEmails" />}
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
              </Grid>
            </Grid>
            <RegisterButton disabled={loading} type="submit" fullWidth variant="contained">
              Sign Up
            </RegisterButton>
            <Grid container justifyContent="center">
              <Grid item>
                <LinkTypography>
                  Already a member? &nbsp;
                  <SignLink href="#">Sign in</SignLink>
                </LinkTypography>
              </Grid>
            </Grid>
          </Box>
        </CBox>
      </Container>
    </ThemeProvider>
  )
}
