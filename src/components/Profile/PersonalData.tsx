import { Stack, Typography, MenuItem } from '@mui/material'
import useStyles, {
  ProfileConfirmBox,
  PersonalModalButton,
  StyledTypographyProfile,
  StyledTypographyHeader,
  PersonalSubmitButton,
  StyledSelectField,
} from './ProfileStyles'
import { Box } from '@mui/system'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { FC, memo, useCallback } from 'react'
import { useAppDispatch } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import { sagaActions } from '../../store/saga-actions'

const PersonalData: FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const today = new Date()

  const initialValues = {
    fullName: '',
    representiveLicenseNum: '',
    city: '',
    driverLicenseNum: 0,
    regAddress: '',
    driverLicense: '',
    idNumber: 0,
    phone: '',
    fullNameOf: '',
    birthdayDate: today,
  }

  const validationSchema = yup.object().shape({
    fullName: yup.string().min(3).nullable(true),
    fullNameOf: yup.string().min(3).nullable(true),
    representiveLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
    city: yup.string().nullable(true),
    driverLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
    regAddress: yup.string().min(5).nullable(true),
    driverLicense: yup.number().min(8).required('Write min 8 numbers'),
    idNumber: yup.number().min(8).required('Write min 8 numbers'),
    phone: yup
      .string()
      .matches(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        'Invalid telephone format',
      )
      .nullable(true),
    birthdayDate: yup.date().required('Date is required'),
  })

  const onSubmit = async (values, { resetForm }) => {
    dispatch({ type: sagaActions.USER_UPDATE_SAGA, payload: values })
    resetForm()
  }

  const showModal = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
  }, [dispatch])

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Box>
            <StyledTypographyProfile variant="h5">MY CARS</StyledTypographyProfile>
            <PersonalModalButton onClick={showModal}>Add Car</PersonalModalButton>
          </Box>
          <Box>
            <StyledTypographyHeader variant="h5">DRIVERS DATA</StyledTypographyHeader>
            <Stack direction="column" sx={{ width: '60%' }}>
              <Stack direction="row">
                <Stack direction="column" flex={1} className={classes.stackLeft}>
                  <label className={classes.label} htmlFor="fullName">
                    FULL NAME (NICKNAME)*
                  </label>
                  <Field
                    className={classes.textField}
                    name="fullName"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="fullName" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="birthdayDate">
                    DOB*
                  </label>
                  <Field
                    className={classes.textField}
                    name="birthdayDate"
                    type="date"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="birthdayDate" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="driverLicense">
                    DRIVER LICENSE NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="driverLicense"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="driverLicense" component="div" />
                  </div>

                  <label className={classes.label} htmlFor="phone">
                    CELL NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="phone"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="phone" component="div" />
                  </div>

                  <label className={classes.label} htmlFor="idNumber">
                    ID NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="idNumber"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="idNumber" component="div" />
                  </div>
                </Stack>
                <Stack direction="column" flex={1}>
                  <label className={classes.label} htmlFor="city">
                    CITY*
                  </label>
                  <StyledSelectField name="city">
                    <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                    <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
                  </StyledSelectField>
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="city" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="regAddress">
                    REG ADRESS*
                  </label>
                  <Field
                    className={classes.textField}
                    name="regAddress"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="regAddress" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="fullNameOf">
                    FULL NAME OF YOUR REPRESENTATIVE
                  </label>
                  <Field
                    className={classes.textField}
                    name="fullNameOf"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="fullNameOf" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="representiveLicenseNum">
                    REPRESENTAIVE LICENSE NUMBER
                  </label>
                  <Field
                    className={classes.textField}
                    name="representiveLicenseNum"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="representiveLicenseNum" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="driverLicenseNum">
                    SPORT DRIVER LICENSE NUMBER
                  </label>
                  <Field
                    className={classes.textField}
                    name="driverLicenseNum"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="driverLicenseNum" component="div" />
                  </div>
                </Stack>
              </Stack>
              <ProfileConfirmBox>
                <PersonalSubmitButton disabled={isSubmitting} type="submit">
                  Save
                </PersonalSubmitButton>
                <Typography>
                  No License Number? Click <span className={classes.forgot}>here</span>{' '}
                </Typography>
              </ProfileConfirmBox>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default memo(PersonalData)
