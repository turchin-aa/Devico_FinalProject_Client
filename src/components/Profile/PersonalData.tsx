import { Typography, MenuItem, Stack, Box, TextField, FormControl } from '@mui/material'
import useStyles, {
  ProfileConfirmBox,
  PersonalModalButton,
  StyledTypographyProfile,
  StyledTypographyHeader,
  PersonalSubmitButton,
  StyledSelectField,
} from './ProfileStyles'
import { useFormik } from 'formik'
import { FC, memo, useCallback, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import { personalData } from './formikContent'

const validationSchema = personalData.validationSchema
const initialValues = personalData.initialValues

const PersonalData: FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async (values, { resetForm }) => {
    dispatch({ type: personalData.onSubmitType, payload: { ...values, city } })
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

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
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
              <TextField
                name="nickName"
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.nickName && formik.touched.nickName ? true : false}
                value={formik.values.nickName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.nickName && formik.touched.nickName ? (
                  <div>{formik.errors.nickName}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="birthday">
                DOB*
              </label>
              <TextField
                name="birthday"
                type="date"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.birthday && formik.touched.birthday ? true : false}
                value={formik.values.birthday}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.birthday &&
                formik.touched.birthday &&
                typeof formik.errors.birthday === 'string' ? (
                  <div>{formik.errors.birthday}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="driverLicenseNum">
                DRIVER LICENSE NUMBER*
              </label>
              <TextField
                name="driverLicenseNum"
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={
                  formik.errors.driverLicenseNum && formik.touched.driverLicenseNum ? true : false
                }
                value={formik.values.driverLicenseNum}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.driverLicenseNum && formik.touched.driverLicenseNum ? (
                  <div>{formik.errors.driverLicenseNum}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="cellNumber">
                CELL NUMBER*
              </label>

              <TextField
                name="cellNumber"
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.cellNumber && formik.touched.cellNumber ? true : false}
                value={formik.values.cellNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.cellNumber && formik.touched.cellNumber ? (
                  <div>{formik.errors.cellNumber}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="idNumber">
                ID NUMBER*
              </label>
              <TextField
                name="idNumber"
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.idNumber && formik.touched.idNumber ? true : false}
                value={formik.values.idNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.idNumber && formik.touched.idNumber ? (
                  <div>{formik.errors.idNumber}</div>
                ) : null}
              </div>
            </Stack>
            <Stack direction="column" flex={1}>
              <FormControl fullWidth>
                <label className={classes.label} htmlFor="city">
                  CITY*
                </label>
                <StyledSelectField value={city} name="city" onChange={handleChange}>
                  <MenuItem value={'Kharkiv'}>Kharkiv</MenuItem>
                  <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
                </StyledSelectField>
                <div className={classes.errorContainer}> </div>
              </FormControl>

              <label className={classes.label} htmlFor="address">
                REG ADRESS*
              </label>
              <TextField
                name="address"
                type="text"
                required
                fullWidth
                size="small"
                id="outlined-basic"
                error={formik.errors.address && formik.touched.address ? true : false}
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.address && formik.touched.address ? (
                  <div>{formik.errors.address}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="representiveFullName">
                FULL NAME OF YOUR REPRESENTATIVE
              </label>
              <TextField
                name="representiveFullName"
                type="text"
                fullWidth
                size="small"
                id="outlined-basic"
                error={
                  formik.errors.representiveFullName && formik.touched.representiveFullName
                    ? true
                    : false
                }
                value={formik.values.representiveFullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.representiveFullName && formik.touched.representiveFullName ? (
                  <div>{formik.errors.representiveFullName}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="representiveLicenseNum">
                REPRESENTAIVE LICENSE NUMBER
              </label>
              <TextField
                name="representiveLicenseNum"
                type="text"
                fullWidth
                size="small"
                id="outlined-basic"
                error={
                  formik.errors.representiveLicenseNum && formik.touched.representiveLicenseNum
                    ? true
                    : false
                }
                value={formik.values.representiveLicenseNum}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.representiveLicenseNum && formik.touched.representiveLicenseNum ? (
                  <div>{formik.errors.representiveLicenseNum}</div>
                ) : null}
              </div>

              <label className={classes.label} htmlFor="sportDriverLicenseNum">
                SPORT DRIVER LICENSE NUMBER
              </label>

              <TextField
                name="sportDriverLicenseNum"
                type="text"
                fullWidth
                size="small"
                id="outlined-basic"
                error={
                  formik.errors.sportDriverLicenseNum && formik.touched.sportDriverLicenseNum
                    ? true
                    : false
                }
                value={formik.values.sportDriverLicenseNum}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className={classes.errorContainer}>
                {formik.errors.sportDriverLicenseNum ? (
                  // && formik.touched.sportDriverLicenseNum
                  <div>{formik.errors.sportDriverLicenseNum}</div>
                ) : null}
              </div>
            </Stack>
          </Stack>
          <ProfileConfirmBox>
            <PersonalSubmitButton type="submit">Save</PersonalSubmitButton>
            <Typography>
              No License Number? Click <span className={classes.forgot}>here</span>{' '}
            </Typography>
          </ProfileConfirmBox>
        </Stack>
      </Box>
    </Box>
  )
}

export default memo(PersonalData)
