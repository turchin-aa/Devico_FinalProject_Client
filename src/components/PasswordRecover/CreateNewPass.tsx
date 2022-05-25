import * as yup from 'yup'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { sagaActions } from '../../store/saga-actions'
import useQuery from '../../hooks/query.hook'
import {
  createTheme,
  ThemeProvider,
  Dialog,
  DialogContent,
  TextField,
  Box,
  Typography,
  useMediaQuery,
  Divider,
  Grid,
} from '@mui/material'
import { RegisterButton, styledDiv } from '../Auth/AuthStyles'
import { memo } from 'react'

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
      dispatch({
        type: sagaActions.USER_NEWPASS_SAGA,
        payload: { ...values, token, id },
      })
      resetForm()
    },
  })

  const createNewPassIsShown = useAppSelector(state => state.ui.showCreateNewPassword)

  const query = useQuery()

  const token = query.get('token')
  const id = query.get('id')

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth open={createNewPassIsShown}>
      <ThemeProvider theme={theme}>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 'bold', fontSize: 26, mt: 1, mb: 1, textAlign: 'center' }}
        >
          Password Recover
        </Typography>
        <Divider />
        <DialogContent>
          <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1 }}>
                NEW PASSWORD
              </Typography>
              <TextField
                fullWidth
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ mb: 1 }}
              />
              {formik.errors.password && formik.touched.password ? (
                <div style={styledDiv}>{formik.errors.password}</div>
              ) : null}
            </Grid>
            <Grid>
              <Typography sx={{ fontFamily: 'Arial', fontSize: 12, mb: 1, mt: 2 }}>
                CONFIRM PASSWORD
              </Typography>
              <TextField
                fullWidth
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ mb: 1 }}
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                <div style={styledDiv}>{formik.errors.confirmPassword}</div>
              ) : null}
            </Grid>
            <RegisterButton type="submit" fullWidth variant="contained">
              Change password
            </RegisterButton>
          </Box>
        </DialogContent>
      </ThemeProvider>
    </Dialog>
  )
}

export default memo(CreateNewPass)
