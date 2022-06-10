import {
  Box,
  Card,
  CardContent,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { FC, memo, useCallback } from 'react'
import { GeneralInformation } from '../../pages/LicensePage/StylesLicensePage'
import { licenseTypes } from './LicensesData'
import {
  DividerCard,
  Label,
  MainStackForm,
  StackCard,
  StackLicenseForm,
  StyledTextField,
  StyledTypography,
  LabelInput,
  StyledArticleIcon,
} from './LicenseFormStyles'
import { PersonalSubmitButton } from '../Profile/ProfileStyles'
import useStyles from './LicenseFormStyles'
import { useAppDispatch } from '../../hooks/redux.hook'
import { useNavigate } from 'react-router-dom'
import { formData } from './formikLicense'

const LicenseForm: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const classes = useStyles()

  const onSubmit = useCallback(
    async (values: object, { resetForm }) => {
      dispatch({ type: formData.onSubmitType, payload: values })
      resetForm()
      navigate('/profile', { replace: true })
    },
    [dispatch, navigate],
  )

  const formik = useFormik({
    initialValues: formData.initialValues,
    validationSchema: formData.validationSchema,
    onSubmit,
  })

  return (
    <Box pt={4}>
      <form onSubmit={formik.handleSubmit}>
        <MainStackForm direction="row" gap={3}>
          <Stack direction="column" flex={1} alignItems={'center'}>
            <div className={classes.profileAvatarContainer}>
              <label className={classes.label} htmlFor="icon-button-file">
                <input accept="image/*" id="icon-button-file" type="file" name="picture" hidden />
                <LabelInput>ADD PHOTO 3/4</LabelInput>
                <div className={classes.zone}>
                  <StyledArticleIcon />
                  <p style={{ marginTop: 5 }}>
                    Upload or drag <br /> files here
                  </p>
                  <p style={{ marginTop: 0 }}>Format only jpeg or png</p>
                </div>
              </label>
            </div>
          </Stack>
          <Stack direction="column" flex={2} sx={{ mt: '20px' }}>
            <StyledTypography>FULL NAME* (Ukranian)</StyledTypography>
            <StyledTextField
              name="fullNameUkrainian"
              type="text"
              error={
                formik.errors.fullNameUkrainian && formik.touched.fullNameUkrainian ? true : false
              }
              value={formik.values.fullNameUkrainian}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.fullNameUkrainian && formik.touched.fullNameUkrainian ? (
                <div>{formik.errors.fullNameUkrainian}</div>
              ) : null}
            </div>
            <StyledTypography>FULL NAME* (Latin)</StyledTypography>
            <StyledTextField
              name="fullNameLatin"
              type="text"
              error={formik.errors.fullNameLatin && formik.touched.fullNameLatin ? true : false}
              value={formik.values.fullNameLatin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.fullNameLatin && formik.touched.fullNameLatin ? (
                <div>{formik.errors.fullNameLatin}</div>
              ) : null}
            </div>
            <StyledTypography>DOB</StyledTypography>
            <StyledTextField
              name="dob"
              type="date"
              error={formik.errors.dob && formik.touched.dob ? true : false}
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.dob && formik.touched.dob ? <div>{formik.errors.dob}</div> : null}
            </div>
            <StyledTypography>THE CITY WHRE YOU WAS BORN</StyledTypography>
            <StyledTextField
              name="nativeCity"
              type="text"
              error={formik.errors.nativeCity && formik.touched.nativeCity ? true : false}
              value={formik.values.nativeCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.nativeCity && formik.touched.nativeCity ? (
                <div>{formik.errors.nativeCity}</div>
              ) : null}
            </div>
          </Stack>
          <Stack direction="column" flex={2} sx={{ mt: '20px' }}>
            <StyledTypography>ADDRESS</StyledTypography>
            <StyledTextField
              name="address"
              type="text"
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
            <StyledTypography>AN IDENTIFICATION NUMBER</StyledTypography>
            <StyledTextField
              name="identificationNum"
              type="text"
              error={
                formik.errors.identificationNum && formik.touched.identificationNum ? true : false
              }
              value={formik.values.identificationNum}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.identificationNum && formik.touched.identificationNum ? (
                <div>{formik.errors.identificationNum}</div>
              ) : null}
            </div>
            <StyledTypography>EMAIL</StyledTypography>
            <StyledTextField
              name="email"
              type="text"
              error={formik.errors.email && formik.touched.email ? true : false}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.email && formik.touched.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <StyledTypography>CELL NUMBER</StyledTypography>
            <StyledTextField
              name="phone"
              type="text"
              error={formik.errors.phone && formik.touched.phone ? true : false}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className={classes.errorContainer}>
              {formik.errors.phone && formik.touched.phone ? (
                <div>{formik.errors.phone}</div>
              ) : null}
            </div>
          </Stack>
        </MainStackForm>
        <GeneralInformation variant="h6" mt={2}>
          TYPE OF LICENSE:
        </GeneralInformation>
        <Divider sx={{ width: '92%', mt: '20px', mb: '30px' }} />
        <Box mt={3}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <StackLicenseForm>
              {licenseTypes &&
                licenseTypes.map((el: any, index) => (
                  <Label
                    onChange={formik.handleChange}
                    key={index}
                    value={el.value}
                    name="license"
                    control={<Radio />}
                    label={
                      <Stack direction="row">
                        <Card sx={{ minWidth: 275 }}>
                          <CardContent>
                            <StackCard>
                              <Typography>{el.name}</Typography>
                              <Typography sx={{ fontWeight: 600 }}>{el.price}</Typography>
                            </StackCard>
                            <DividerCard />
                            <Stack sx={{ maxWidth: '275px' }}>
                              <Typography>{el.description}</Typography>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Stack>
                    }
                  />
                ))}
            </StackLicenseForm>
            <Label
              onChange={formik.handleChange}
              value="nolicense"
              name="license"
              control={<Radio />}
              label="I don`t know what kind of license I need"
            />
          </RadioGroup>
        </Box>
        <GeneralInformation>PAYMENT METHODS:</GeneralInformation>
        <Divider sx={{ width: '92%', mt: '20px', mb: '20px' }} />
        <PersonalSubmitButton type="submit">SUBMIT</PersonalSubmitButton>
      </form>
    </Box>
  )
}

export default memo(LicenseForm)
