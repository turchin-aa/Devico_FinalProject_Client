import * as yup from 'yup'
import { useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { useHttp } from '../../myhook/http.hook'
import { RootState } from '../../store'
import { uiActions } from '../../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material'
import { CBox, RegisterButton, LinkTypography, SignLink, ErrorMessage } from '../Auth/AuthStyles'

const theme = createTheme()

const PassRecover = () => {
  const { loading, request } = useHttp()
  const [isSend, setIsSend] = useState(false)

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Invalid format').required('Invalid email'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await request('http://localhost:8000/api/forgotPassword', 'POST', { ...values })
        setIsSend(!isSend)
        resetForm()
      } catch (e) {}
    },
  })

  const recoverIsShown = useSelector<RootState, boolean>(state => state.ui.showForgetPassword)

  const toggleHandler = useCallback(() => {
    if (recoverIsShown) {
      dispatch(uiActions.toggleForgetPassword())
      setIsSend(false)
    }
  }, [dispatch, recoverIsShown])

  const changeSignHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  return (
    <Dialog open={recoverIsShown} onClose={toggleHandler}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ overflow: 'hidden' }}>
          <CssBaseline />
          <CBox>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
              Password Recover
            </Typography>
            <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 1 }}></Box>

            <DialogContent>
              {isSend ? (
                <>
                  <DialogContentText>
                    A password reset email has been sent to the email address on file for your
                    account, but may take several minutes to show up in your inbox. Link valid 24h
                  </DialogContentText>
                  <RegisterButton onClick={toggleHandler} fullWidth variant="contained">
                    OK
                  </RegisterButton>
                </>
              ) : (
                <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
                  <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>EMAIL</Typography>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{ mb: 5 }}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                  ) : null}
                  <RegisterButton disabled={loading} type="submit" fullWidth variant="contained">
                    Submit
                  </RegisterButton>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <LinkTypography>
                        Want to comeback? &nbsp;
                        <SignLink onClick={changeSignHandler}>Log in</SignLink>
                      </LinkTypography>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </DialogContent>
          </CBox>
        </Container>
      </ThemeProvider>
    </Dialog>
  )
}

export default PassRecover
