import * as yup from 'yup'
import { useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { uiActions } from '../../store/ui-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { sagaActions } from '../../store/saga-actions'
import {
  createTheme,
  ThemeProvider,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Divider,
} from '@mui/material'
import { RegisterButton, LinkTypography, SignLink, styledDiv } from '../Auth/AuthStyles'

const theme = createTheme()

const PassRecover = () => {
  const [isSend, setIsSend] = useState(false)

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Invalid format').required('Invalid email'),
    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch({ type: sagaActions.USER_RESET_SAGA, payload: values })
      resetForm()
      setIsSend(true)
    },
  })

  const recoverIsShown = useAppSelector(state => state.ui.showForgetPassword)

  const toggleHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
    setIsSend(false)
  }, [dispatch])

  const changeSignHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth={true} open={recoverIsShown} onClose={toggleHandler}>
      <ThemeProvider theme={theme}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 'bold', fontSize: 26, mb: 1, mt: 1, textAlign: 'center' }}
        >
          Password Recover
        </Typography>
        <Divider />
        <DialogContent>
          {isSend ? (
            <>
              <DialogContentText>
                A password reset email has been sent to the email address on file for your account,
                but may take several minutes to show up in your inbox. Link valid 24h
              </DialogContentText>
              <RegisterButton onClick={toggleHandler} fullWidth variant="contained">
                OK
              </RegisterButton>
            </>
          ) : (
            <Box component="form" sx={{ mt: 1 }} onSubmit={formik.handleSubmit}>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>EMAIL</Typography>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 3 }}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div style={styledDiv}>{formik.errors.email}</div>
                ) : null}
              </Grid>
              <RegisterButton type="submit" fullWidth variant="contained">
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
      </ThemeProvider>
    </Dialog>
  )
}

export default PassRecover
