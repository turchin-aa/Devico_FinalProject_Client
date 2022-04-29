import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useHttp } from '../../myhook/http.hook'
const theme = createTheme()

export default function SignUp() {
  const { loading, request } = useHttp()

  const [form, setForm] = useState({
    email: '',
    password: '',
    telephone: '',
  })

  const [pass, setPass] = useState(false)

  const handleChange = (event: any) => {
    event.preventDefault()
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const checkingPasswordMatch = (event: any) => {
    event.preventDefault()
    if (event.target.value === form.password) {
      setPass(!pass)
    }
  }

  const registerHandler = async () => {
    if (pass) {
      setPass(false)
      try {
        await request('/api/auth/register', 'POST', { ...form })
      } catch (e) {}
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
            Sign up
          </Typography>
          <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 2 }}></Box>
          <Box component="form" onSubmit={registerHandler} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: '#24548B',
                    height: 50,
                    borderRadius: 0,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                  fullWidth
                >
                  <Grid item xs={2}>
                    <FacebookIcon sx={{ mt: 1 }} />
                  </Grid>
                  <Grid item xs={12}>
                    CONNECT WITH FACEBOOK
                  </Grid>
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="button"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: '#E25F42',
                    height: 50,
                    borderRadius: 0,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                  fullWidth
                >
                  <Grid item xs={3}>
                    <GoogleIcon sx={{ mt: 1 }} />
                  </Grid>
                  <Grid item xs={12}>
                    CONNECT WITH GOOGLE
                  </Grid>
                </Button>
              </Grid>
              <Box
                sx={{ height: '1px', width: '40%', background: '#E5E5E5', mt: 2, ml: 2, mr: 3 }}
              ></Box>
              <Typography>OR</Typography>
              <Box sx={{ height: '1px', width: '44%', background: '#E5E5E5', mt: 2, ml: 3 }}></Box>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>EMAIL*</Typography>
                <TextField required fullWidth id="email" name="email" onChange={handleChange} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>TELEPHONE</Typography>
                <TextField fullWidth name="telephone" id="telephone" onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>PASSWORD*</Typography>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>
                  CONFIRM PASSWORD*
                </Typography>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  onChange={checkingPasswordMatch}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" />}
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
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#6A6968',
                height: '48px',
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography
                  sx={{
                    color: '#595353',
                    fontSize: 14,
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                  }}
                >
                  Already a member? &nbsp;
                  <Link
                    href="#"
                    sx={{
                      color: '#595353',
                      fontSize: 14,
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                    }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
