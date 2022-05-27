import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import useQuery from '../../hooks/query.hook'
import { theme } from '../../theme/CustomTheme'
import { Dialog, DialogContent, TextField, Box, useMediaQuery, Divider, Grid } from '@mui/material'
import { MyTypography, RegisterButton, styledDiv } from '../Auth/AuthStyles'
import { memo, useCallback } from 'react'
import { createNewPassData } from '../Profile/formikContent'
import { useStyles } from './PasswordStyles'

const CreateNewPass: React.FC = () => {
  const dispatch = useAppDispatch()
  const classes = useStyles()

  const onSubmit = useCallback(
    async (values, { resetForm }) => {
      dispatch({
        type: createNewPassData.onSubmitType,
        payload: { ...values, token, id },
      })
      resetForm()
    },
    [dispatch],
  )

  const formik = useFormik({
    initialValues: createNewPassData.initialValues,
    validationSchema: createNewPassData.validationSchema,
    onSubmit,
  })

  const createNewPassIsShown = useAppSelector<boolean>(state => state.ui.showCreateNewPassword)

  const query = useQuery()

  const token = query.get('token')
  const id = query.get('id')

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth open={createNewPassIsShown}>
      <div className={classes.typography}>Password Recover</div>
      <Divider />
      <DialogContent>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
            <MyTypography>NEW PASSWORD</MyTypography>
            <TextField
              fullWidth
              id="password"
              type="password"
              name="password"
              size="small"
              error={formik.errors.password && formik.touched.password ? true : false}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.password && formik.touched.password ? (
                <div style={styledDiv}>{formik.errors.password}</div>
              ) : null}
            </div>
          </Grid>
          <Grid>
            <MyTypography>CONFIRM PASSWORD</MyTypography>
            <TextField
              fullWidth
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              size="small"
              error={formik.errors.confirmPassword && formik.touched.confirmPassword ? true : false}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                <div style={styledDiv}>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
          </Grid>
          <RegisterButton type="submit" fullWidth variant="contained">
            Change password
          </RegisterButton>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default memo(CreateNewPass)
