import * as yup from 'yup'
import { useCallback, memo } from 'react'
import { useFormik } from 'formik'
import { uiActions } from '../../store/ui-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { sagaActions } from '../../store/saga-actions'
import { userSliceActions } from '../../store/user-slice'
import { theme } from '../../theme/CustomTheme'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Divider,
  DialogTitle,
} from '@mui/material'
import {
  RegisterButton,
  LinkTypography,
  SignLink,
  styledDiv,
  MyTypography,
} from '../Auth/AuthStyles'
import { useAuthStyles } from '../Auth/useAuthStyles'

const initialValues = {
  email: '',
}
const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid format').required('Invalid email'),
})

<<<<<<< HEAD
const PassRecover = () => {
  const isSend = useAppSelector<boolean>(state => state.user.isEmailSend)
=======
const PassRecover: React.FC = () => {
  const isSend = useAppSelector(state => state.user.isEmailSend)
  const classes = useAuthStyles()
>>>>>>> fix/modal_styles

  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async (values, { resetForm }) => {
    dispatch({ type: sagaActions.USER_RESET_SAGA, payload: values })
    resetForm()
  }, [])

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const recoverIsShown = useAppSelector<boolean>(state => state.ui.showForgetPassword)

  const toggleHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
    dispatch(userSliceActions.unToggleEmailSend())
    dispatch(uiActions.toggleLog())
    formik.resetForm()
  }, [dispatch])

  const changeSignHandler = useCallback(() => {
    dispatch(uiActions.toggleForgetPassword())
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth open={recoverIsShown} onClose={toggleHandler}>
      <DialogTitle className={classes.dialogTitle}>
        <div className={classes.recoverTitle}>
          <Typography component="h1" variant="h5">
            <p className={classes.titleTypo}> Password recover </p>
          </Typography>
        </div>
      </DialogTitle>
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
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid item xs={12}>
              <MyTypography>EMAIL</MyTypography>
              <TextField
                fullWidth
                error={formik.errors.email && formik.touched.email ? true : false}
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorMessege}>
                {formik.errors.email && formik.touched.email ? (
                  <div style={styledDiv}>{formik.errors.email}</div>
                ) : null}
              </div>
            </Grid>
            <RegisterButton id="recover" type="submit" fullWidth variant="contained">
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
    </Dialog>
  )
}

export default memo(PassRecover)
