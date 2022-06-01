import { Box, Divider, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { memo, useCallback, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import { RegisterButton, styledDiv } from '../Auth/AuthStyles'
import { useAuthStyles } from '../Auth/useAuthStyles'
import ModalContainer from '../ModalHeader/ModalContainer'
import { StyledSelectField } from '../Profile/ProfileStyles'
import { regForEventData } from './formikRegForEvent'

const Register: React.FC = () => {
  const [car, setCar] = useState('')
  const [vehicleClass, setVehicleClass] = useState('')
  const classes = useAuthStyles()
  const regEventCartIsShown = useAppSelector<boolean>(state => state.ui.showEventReg)
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(
    async (values: object, { resetForm }) => {
      dispatch({ type: regForEventData.onSubmitType, payload: { ...values, car, vehicleClass } })
      resetForm()
    },
    [dispatch],
  )

  const formik = useFormik({
    initialValues: regForEventData.initialValues,
    validationSchema: regForEventData.validationSchema,
    onSubmit,
  })

  const handleCarChange = useCallback(
    e => {
      setCar(e.target.value as string)
    },
    [setCar],
  )
  const handleVehicleClassChange = useCallback(
    e => {
      setVehicleClass(e.target.value as string)
    },
    [setVehicleClass],
  )

  return (
    <ModalContainer
      modalType="Apply for event"
      dispatchAction={uiActions.toggleShowEventReg()}
      cartIsShown={regEventCartIsShown}
      resetForm={formik.resetForm}
    >
      <Box component="form" onSubmit={formik.handleSubmit}>
        <div className={clsx(classes.flexCenter, classes.mobileView)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <label className={classes.label} htmlFor="city">
                  SELECT CAR*
                </label>
                <StyledSelectField value={car} name="car" required onChange={handleCarChange}>
                  <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                  <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
                </StyledSelectField>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <label className={classes.label} htmlFor="city">
                  VEHICLE CLASS*
                </label>
                <StyledSelectField
                  value={vehicleClass}
                  required
                  name="vehicle class"
                  onChange={handleVehicleClassChange}
                >
                  <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                  <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
                </StyledSelectField>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className={classes.divider}>
          <Divider variant="middle" />
        </div>
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
          <label className={classes.label} htmlFor="DPN">
            DESIRED PARTICIPANT NUMBER*
          </label>
          <br />
          <TextField
            error={
              formik.errors.desiredParticipantNumber && formik.touched.desiredParticipantNumber
                ? true
                : false
            }
            id="desiredParticipantNumber"
            name="desiredParticipantNumber"
            required
            size="small"
            value={formik.values.desiredParticipantNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className={classes.errorMessege}>
            {formik.errors.desiredParticipantNumber && formik.touched.desiredParticipantNumber ? (
              <div style={styledDiv}>{formik.errors.desiredParticipantNumber}</div>
            ) : null}
          </div>
        </Grid>

        <Grid item xs={12} sm={6}></Grid>
        <RegisterButton type="submit" fullWidth variant="contained">
          Submit
        </RegisterButton>
      </Box>
    </ModalContainer>
  )
}

export default memo(Register)
