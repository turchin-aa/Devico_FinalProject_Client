import { styled, Button, Typography, Select, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  textField: {
    width: '100%',
    padding: '4px 10px 10px 10px',
    marginBottom: '18px',
    border: '1px solid #E5E5E5',
    borderRadius: '0px',
  },

  label: {
    paddingLeft: '2px',
    letterSpacing: '2px',
    fontSize: '11px',
    marginBottom: '5px',
  },
  error: {
    color: '#e53e3e',
  },
  forgot: {
    fontSize: '16px',
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const ProfileSubmitButton = styled(Button)({
  width: '200px',
  background: '#9B66B6',
  color: '#FFFFFF',
  marginTop: '35%',
  marginRight: '30%',
  '&:hover': {
    background: '#CB87EE',
  },
})

export const PersonalModalButton = styled(Button)({
  width: '200px',
  background: '#9B66B6',
  color: '#FFFFFF',
  marginRight: '30%',
  '&:hover': {
    background: '#CB87EE',
  },
})

export const PersonalSubmitButton = styled(Button)({
  width: '400px',
  background: '#9B66B6',
  color: '#FFFFFF',
  marginBottom: '5px',
  '&:hover': {
    background: '#CB87EE',
  },
})

export const ProfileConfirmBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const StyledTypographyProfile = styled(Typography)({
  paddingLeft: '10px',
  marginTop: '10px',
  fontSize: '16px',
  marginBottom: '15px',
  fontWeight: 'bold',
})

export const StyledTypographyHeader = styled(Typography)({
  paddingLeft: '10px',
  marginTop: '30px',
  fontSize: '16px',
  marginBottom: '20px',
  fontWeight: 'bold',
})

export const StyledSelectField = styled(Select)({
  borderRadius: '0px',
  maxHeight: '31px',
  width: '100%',
  marginBottom: '18px',
})

export default useStyles
