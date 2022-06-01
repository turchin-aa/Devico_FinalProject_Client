import { Box, Divider, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { memo, useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import { RegisterButton, styledDiv } from '../Auth/AuthStyles'
import { useAuthStyles } from '../Auth/useAuthStyles'
import ModalContainer from '../ModalHeader/ModalContainer'
import { cancelParticipationData } from './formikRegForEvent'

const CancelPArticipation: React.FC = () => {
  const classes = useAuthStyles()
  const cancelParticipationIsShown = useAppSelector<boolean>(
    state => state.ui.showCancelParticipation,
  )
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(
    async (values: object, { resetForm }) => {
      dispatch({ type: cancelParticipationData.onSubmitType, payload: { ...values } })
      resetForm()
    },
    [dispatch],
  )

  const formik = useFormik({
    initialValues: cancelParticipationData.initialValues,
    validationSchema: cancelParticipationData.validationSchema,
    onSubmit,
  })

  return (
    <ModalContainer
      modalType="Apply for event"
      dispatchAction={uiActions.toggleShowCancelParticipation()}
      cartIsShown={cancelParticipationIsShown}
      resetForm={formik.resetForm}
    >
      <Box component="form" onSubmit={formik.handleSubmit}>
        <div>
          <label className={classes.label} id="drivers-data" htmlFor="Drivers data">
            DRIVERS DATA
          </label>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className={classes.regTitle}>
                <p>
                  Full name: <span id="info">info</span>
                </p>
                <p>DOB:</p>
                <p>Driver license number:</p>
                <p>Cell number:</p>
                <p>ID number:</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.regTitle}>
                <p>City:</p>
                <p>Reg. adress:</p>
                <p>Full name of your representative:</p>
                <p>Representative license nubmer:</p>
                <p>Sport driver license number:</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.divider}>
          <Divider variant="middle" />
        </div>
        <Grid item xs={12}>
          <label className={classes.label} htmlFor="reson">
            RESON INPUT
          </label>
          <br />
          <TextField
            error={formik.errors.reson && formik.touched.reson ? true : false}
            id="reson"
            name="reson"
            required
            fullWidth
            value={formik.values.reson}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className={classes.errorMessege}>
            {formik.errors.reson && formik.touched.reson ? (
              <div style={styledDiv}>{formik.errors.reson}</div>
            ) : null}
          </div>
        </Grid>

        <Grid item xs={12} sm={6}></Grid>
        <RegisterButton type="submit" fullWidth variant="contained">
          Cancel Event Participation
        </RegisterButton>
      </Box>
    </ModalContainer>
  )
}

export default memo(CancelPArticipation)
