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
      modalType="Cancel Event Participation"
      dispatchAction={uiActions.toggleShowCancelParticipation()}
      cartIsShown={cancelParticipationIsShown}
      resetForm={formik.resetForm}
    >
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid item xs={12}>
          <label className={classes.label} htmlFor="reson">
            RESON INPUT
          </label>
          <br />
          <TextField
            error={formik.errors.reson && formik.touched.reson ? true : false}
            id="reson"
            name="reson"
            multiline
            maxRows={10}
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
