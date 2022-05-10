import { Button, styled, Typography, Link } from '@mui/material'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

export const Facebook = styled(FacebookIcon)({
  marginTop: 4,
})

export const Google = styled(GoogleIcon)({
  marginTop: 4,
})

export const FacebookButton = styled(Button)({
  marginTop: 3,
  marginBottom: 20,
  backgroundColor: '#24548B',
  height: 50,
  borderRadius: 0,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1.2,
})

export const CBox = styled(Box)({
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const GoogleButton = styled(Button)({
  marginTop: 1,
  marginBottom: 20,
  backgroundColor: '#E25F42',
  height: 50,
  borderRadius: 0,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1.2,
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#eb3d34',
  },
})

export const MyTypography = styled(Typography)({
  fontFamily: 'Arial',
  fontSize: 12,
  mb: 1,
})

export const RegisterButton = styled(Button)({
  marginTop: 3,
  marginBottom: 2,
  backgroundColor: '#6A6968',
  height: '48px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  fontSize: 12,
})

export const LinkTypography = styled(Typography)({
  color: '#595353',
  fontSize: 14,
  fontFamily: 'Lato',
  fontStyle: 'normal',
})

export const SignLink = styled(Link)({
  color: '#595353',
  fontSize: 14,
  fontFamily: 'Lato',
  fontStyle: 'normal',
})
