import { Dialog, DialogContent, Divider, Stack } from '@mui/material'
import { FC, memo, useCallback } from 'react'
import { useAppSelector } from '../../../hooks/redux.hook'
import { useAppDispatch } from '../../../hooks/redux.hook'
import { uiActions } from '../../../store/ui-slice'
import { StyledDialogTitle } from '../../Auth/AuthStyles'
import * as yup from 'yup'
import useStyles from '../ProfileStyles'
import { AddCarCancelButton, AddCarConfirmButton, DialogActionsStyled } from './StylesAddCarModal'
import { Field, Form, Formik, ErrorMessage, useFormik } from 'formik'

interface IAddCarModal {}

const initialValues = {
  model: '',
  year: 1960,
  capacityEngine: '',
  regVehNumber: '',
  techPassNumber: 0,
  vinNumber: 0,
  driveTrain: '',
  fullName: '',
}
const validationSchema = yup.object().shape({
  fullName: yup.string().min(3),
  model: yup.string().min(4).required('Write model, min 4 characters'),
  year: yup
    .number()
    .min(1960)
    .positive()
    .required('Write year of the car, it must me greater than 1960'),
  capacityEngine: yup.string().min(2).required('Write capicicty engine'),
  regVehNumber: yup.string().min(4).required('Vehicle humber must contain at least 4 number'),
  techPassNumber: yup.number().min(1000).required('Tech pass must contain at least 4 number'),
  vinNumber: yup.number().min(1000).required('Vin number must contain at least 4 number'),
  driveTrain: yup.string().min(4).required('Drive train must contain at least 4 number'),
})

const AddCarModal: FC<IAddCarModal> = () => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  const addCarIsShown = useAppSelector<boolean>(state => state.ui.showAddCar)

  const onSubmit = useCallback(async (values, { resetForm }) => {
    console.log(values)
    resetForm()
  },[])
  
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const toggleShowAddCar = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
    formik.resetForm()
  }, [dispatch])

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Dialog open={addCarIsShown} onClose={toggleShowAddCar}>
          <StyledDialogTitle>Add Car</StyledDialogTitle>
          <Divider />
          <Form>
            <DialogContent>
              <Stack direction="row">
                <Stack direction="column" sx={{ mr: '50px' }}>
                  <label className={classes.label} htmlFor="model">
                    MODEL*
                  </label>
                  <Field
                    className={classes.textField}
                    name="model"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="model" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="year">
                    YEAR*
                  </label>
                  <Field
                    className={classes.textField}
                    name="year"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="year" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="capacityEngine">
                    CAPACITY ENGINE*
                  </label>
                  <Field
                    className={classes.textField}
                    name="capacityEngine"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="capacityEngine" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="regVehNumber">
                    REG. VEHICLE NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="regVehNumber"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="regVehNumber" component="div" />
                  </div>
                </Stack>
                <Stack direction="column" sx={{ mr: '20px' }}>
                  <label className={classes.label} htmlFor="techPassNumber">
                    TECHNICAL PASSPORT NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="techPassNumber"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="techPassNumber" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="vinNumber">
                    VIN NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="vinNumber"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="vinNumber" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="driveTrain">
                    DRIVE TRAIN*
                  </label>
                  <Field
                    className={classes.textField}
                    name="driveTrain"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="driveTrain" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="fullName">
                    FULL NAME VEHICLE OWNER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="fullName"
                    type="text"
                    required
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer} id="add-car">
                    <ErrorMessage name="fullName" component="div" />
                  </div>
                </Stack>
              </Stack>
            </DialogContent>
            <DialogActionsStyled>
              <div className={classes.addCartButtonsContainer}>
                <AddCarCancelButton onClick={toggleShowAddCar}>Cancel</AddCarCancelButton>
                <AddCarConfirmButton disabled={isSubmitting} type="submit">
                  Save
                </AddCarConfirmButton>
              </div>
            </DialogActionsStyled>
          </Form>
        </Dialog>
      )}
    </Formik>
  )
}

export default memo(AddCarModal)
