import { Box, Dialog, DialogContent, Divider, Stack, TextField } from '@mui/material'
import { FC, memo, useCallback } from 'react'
import { useAppSelector } from '../../../hooks/redux.hook'
import { useAppDispatch } from '../../../hooks/redux.hook'
import { uiActions } from '../../../store/ui-slice'
import { StyledDialogTitle } from '../../Auth/AuthStyles'
import useStyles from '../ProfileStyles'
import { AddCarCancelButton, AddCarConfirmButton, DialogActionsStyled } from './StylesAddCarModal'
import { useFormik } from 'formik'
import { addCarsData } from '../formikContent'

interface IAddCarModal {}

const AddCarModal: FC<IAddCarModal> = () => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  const addCarIsShown = useAppSelector<boolean>(state => state.ui.showAddCar)

  const onSubmit = useCallback(async (values, { resetForm }) => {
    resetForm()
  }, [])

  const formik = useFormik({
    initialValues: addCarsData.initialValues,
    validationSchema: addCarsData.validationSchema,
    onSubmit,
  })

  const toggleShowAddCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
    formik.resetForm()
  }, [dispatch])

  return (
    <Dialog open={addCarIsShown} onClose={toggleShowAddCar}>
      <StyledDialogTitle>Add Car</StyledDialogTitle>
      <Divider />
      <Box component="form" onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack direction="row">
            <Stack direction="column" className={classes.stack}>
              <label className={classes.label} htmlFor="model">
                MODEL*
              </label>
              <TextField
                name="model"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.model && formik.touched.model ? true : false}
                value={formik.values.model}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.model && formik.touched.model ? (
                  <div>{formik.errors.model}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="year">
                YEAR*
              </label>
              <TextField
                name="year"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.year && formik.touched.year ? true : false}
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.year && formik.touched.year ? <div>{formik.errors.year}</div> : null}
              </div>

              <label className={classes.label} htmlFor="capacityEngine">
                CAPACITY ENGINE*
              </label>
              <TextField
                name="capacityEngine"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.capacityEngine && formik.touched.capacityEngine ? true : false}
                value={formik.values.capacityEngine}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.capacityEngine && formik.touched.capacityEngine ? (
                  <div>{formik.errors.capacityEngine}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="regVehNumber">
                REG. VEHICLE NUMBER*
              </label>
              <TextField
                name="regVehNumber"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.regVehNumber && formik.touched.regVehNumber ? true : false}
                value={formik.values.regVehNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.regVehNumber && formik.touched.regVehNumber ? (
                  <div>{formik.errors.regVehNumber}</div>
                ) : null}
              </div>
            </Stack>
            <Stack direction="column" className={classes.stack} id="right">
              <label className={classes.label} htmlFor="techPassNumber">
                TECHNICAL PASSPORT NUMBER*
              </label>
              <TextField
                name="techPassNumber"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.techPassNumber && formik.touched.techPassNumber ? true : false}
                value={formik.values.techPassNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.techPassNumber && formik.touched.techPassNumber ? (
                  <div>{formik.errors.techPassNumber}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="vinNumber">
                VIN NUMBER*
              </label>
              <TextField
                name="vinNumber"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.vinNumber && formik.touched.vinNumber ? true : false}
                value={formik.values.vinNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.vinNumber && formik.touched.vinNumber ? (
                  <div>{formik.errors.vinNumber}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="driveTrain">
                DRIVE TRAIN*
              </label>
              <TextField
                name="driveTrain"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.driveTrain && formik.touched.driveTrain ? true : false}
                value={formik.values.driveTrain}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.driveTrain && formik.touched.driveTrain ? (
                  <div>{formik.errors.driveTrain}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="fullName">
                FULL NAME VEHICLE OWNER*
              </label>
              <TextField
                name="fullName"
                InputProps={{ classes: { root: classes.root } }}
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.fullName && formik.touched.fullName ? true : false}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer} id="add-car">
                {formik.errors.fullName && formik.touched.fullName ? (
                  <div>{formik.errors.fullName}</div>
                ) : null}
              </div>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActionsStyled>
          <div className={classes.addCartButtonsContainer}>
            <AddCarCancelButton onClick={toggleShowAddCar}>Cancel</AddCarCancelButton>
            <AddCarConfirmButton type="submit">Save</AddCarConfirmButton>
          </div>
        </DialogActionsStyled>
      </Box>
    </Dialog>
  )
}

export default memo(AddCarModal)
