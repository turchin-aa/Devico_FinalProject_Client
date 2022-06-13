import { Divider, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { Wrapper, GeneralInformation } from './StylesLicensePage'
import BackButton from '../../components/BackArrowButton/BackButton'
import LicenseForm from '../../components/LicenseForm/LicenseForm'

const LicensePage: FC = () => {
  return (
    <Wrapper>
      <Stack direction="row">
        <BackButton>
          <span>Get License</span>
        </BackButton>
      </Stack>
      <GeneralInformation>GENERAL INFORMATION:</GeneralInformation>
      <Divider sx={{ width: '92%', mt: '20px' }} />
      <LicenseForm />
    </Wrapper>
  )
}

export default memo(LicensePage)
