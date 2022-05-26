import { Button, styled, Typography, Link, DialogTitle } from '@mui/material'
import { theme } from '../../theme/CustomTheme'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

export const Facebook = styled(FacebookIcon)({
  marginTop: 4,
})

export const Google = styled(GoogleIcon)({
  marginTop: 4,
})

export const SideButton = styled(Button)({
  marginTop: 10,
  marginBottom: 20,
  height: 50,
  borderRadius: 0,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 1.2,
  '&#facebook': {
    backgroundColor: '#695195',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  '&#google': {
    backgroundColor: '#df5030',
    '&:hover': {
      backgroundColor: '#e47057',
    },
  },
})

export const CBox = styled(Box)({
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const MyTypography = styled(Typography)({
  fontFamily: 'Arial',
  fontSize: 12,
  marginBottom: 1,
  marginTop: 3,
})

export const LinkTypography = styled(Typography)({
  color: '#595353',
  fontSize: 14,
  fontFamily: 'Lato',
  fontStyle: 'normal',
  marginBottom: '10px',
})

export const SignLink = styled(Link)({
  color: '#595353',
  fontSize: 14,
  fontFamily: 'Lato',
  fontStyle: 'normal',
  cursor: 'pointer',
})

export const RegisterButton = styled(Button)({
  marginTop: 3,
  marginBottom: 5,
  backgroundColor: '#6A6968',
  height: '48px',
  fontFamily: 'Roboto',
  fontWeight: 700,
  fontSize: 12,
  '&#recover': {
    marginTop: 20,
  },
  '&#cancel': {
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      left: '25%',
      width: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      left: 0,
    },
  },
})

export const styledDiv = {
  color: '#e53e3e',
  fontSize: 12,
}

export const StyledTypography = styled(Typography)({
  paddingLeft: '10px',
  letterSpacing: '2px',
  fontSize: '13px',
})

export const StyledDialogTitle = styled(DialogTitle)({
  margin: 'auto',
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: '30px',
})
