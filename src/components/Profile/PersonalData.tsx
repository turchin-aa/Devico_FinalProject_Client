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
import { FC, memo, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import { sagaActions } from '../../store/saga-actions'

const validationSchema = yup.object().shape({
  nickName: yup.string().min(3).nullable(true),
  representiveFullName: yup.string().min(3).nullable(true),
  representiveLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
  driverLicenseNum: yup.number().min(5).required('Write min 5 numbers'),
  address: yup.string().min(5).nullable(true),
  sportDriverLicenseNum: yup.number().min(8).required('Write min 8 numbers'),
  idNumber: yup.number().min(8).required('Write min 8 numbers'),
  cellNumber: yup
    .string()
    .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, 'Invalid phone format')
    .nullable(true),
  birthday: yup.date().required('Date is required'),
})

const initialValues = {
  nickName: '',
  birthday: new Date(),
  address: '',
  driverLicenseNum: 0,
  representiveFullName: '',
  cellNumber: '',
  representiveLicenseNum: 0,
  sportDriverLicenseNum: 0,
  idNumber: 0,
}

const PersonalData: FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async (values, { resetForm }) => {
    dispatch({ type: sagaActions.USER_UPDATE_DATA_SAGA, payload: { ...values, city } })
    resetForm()
  }, [])

  const showModal = useCallback(() => {
    dispatch(uiActions.toggleShowAddCar())
  }, [dispatch])

  const [city, setCity] = useState('')

  const handleChange = useCallback(
    e => {
      setCity(e.target.value as string)
    },
    [setCity],
  )

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
                  <label className={classes.label} htmlFor="nickName">
                    FULL NAME (NICKNAME)*
                  </label>
                  <Field
                    className={classes.textField}
                    name="nickName"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="nickName" component="div" />
                  </div>

                  <label className={classes.label} htmlFor="birthday">
                    DOB*
                  </label>
                  <Field
                    className={classes.textField}
                    name="birthday"
                    type="date"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="birthday" component="div" />
                  </div>

                  <label className={classes.label} htmlFor="driverLicenseNum">
                    DRIVER LICENSE NUMBER*
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

                  <label className={classes.label} htmlFor="cellNumber">
                    CELL NUMBER*
                  </label>
                  <Field
                    className={classes.textField}
                    name="cellNumber"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="cellNumber" component="div" />
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
                  <StyledSelectField value={city} name="city" onChange={handleChange}>
                    <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                    <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
                  </StyledSelectField>
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="city" component="div" />
                  </div>

                  <label className={classes.label} htmlFor="address">
                    REG ADRESS*
                  </label>
                  <Field
                    className={classes.textField}
                    name="address"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="address" component="div" />
                  </div>
                  <label className={classes.label} htmlFor="representiveFullName">
                    FULL NAME OF YOUR REPRESENTATIVE
                  </label>
                  <Field
                    className={classes.textField}
                    name="representiveFullName"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />

                  <div className={classes.errorContainer}>
                    <ErrorMessage name="representiveFullName" component="div" />
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

                  <label className={classes.label} htmlFor="sportDriverLicenseNum">
                    SPORT DRIVER LICENSE NUMBER
                  </label>
                  <Field
                    className={classes.textField}
                    name="sportDriverLicenseNum"
                    type="text"
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                  />
                  <div className={classes.errorContainer}>
                    <ErrorMessage name="sportDriverLicenseNum" component="div" />
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
