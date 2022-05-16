import * as yup from 'yup'
import { useCallback } from 'react'
import { useFormik } from 'formik'
import { uiActions } from '../../store/ui-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { sagaActions } from '../../store/saga-actions'
import useQuery from '../../hooks/query.hook'
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Dialog,
  DialogContent,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material'
import { CBox, RegisterButton, ErrorMessage } from '../Auth/AuthStyles'
import React from 'react'

const theme = createTheme()

const CreateNewPass = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .min(6, 'The length must be at least 6')
        .max(32)
        .required('The password is required'),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: async (values, { resetForm }) => {
      dispatch({ type: sagaActions.USER_NEWPASS_SAGA, payload: { ...values, token, id } })
      toggleCreateNewPassword()
      resetForm()
    },
  })

  const createNewPassIsShown = useAppSelector(state => state.ui.showCreateNewPassword)

  const toggleCreateNewPassword = useCallback(() => {
    dispatch(uiActions.toggleCreateNewPassword())
  }, [dispatch])

  let query = useQuery()

  const token = query.get('token')
  const id = query.get('id')

  return (
    <Dialog open={createNewPassIsShown} onClose={toggleCreateNewPassword}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ overflow: 'hidden' }}>
          <CssBaseline />
          <CBox>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', fontSize: 26 }}>
              Password Recover
            </Typography>
            <Box sx={{ height: '1px', width: '100%', background: '#E5E5E5', mt: 1 }}></Box>

            <DialogContent>
              <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>
                  NEW PASSWORD
                </Typography>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 5 }}
                />
                {formik.errors.password && formik.touched.password ? (
                  <ErrorMessage>{formik.errors.password}</ErrorMessage>
                ) : null}
                <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>
                  CONFIRM PASSWORD
                </Typography>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 5 }}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                  <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
                ) : null}
                <RegisterButton type="submit" fullWidth variant="contained">
                  Change password
                </RegisterButton>
              </Box>
            </DialogContent>
          </CBox>
        </Container>
      </ThemeProvider>
    </Dialog>
  )
}

export default CreateNewPass
