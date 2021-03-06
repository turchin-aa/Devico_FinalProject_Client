import { styled, Button, Typography, Select, Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { theme } from '../../theme/CustomTheme'

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    width: '100%',
    fontSize: 12,
    padding: '4px 10px 10px 10px',
    border: '1px solid #E5E5E5',
    borderRadius: '2px',
  },

  root: {
    height: 25,
  },

  stack: {
    width: 250,
    marginRight: 40,
    '&#right': {
      marginRight: 20,
    },
  },

  errorContainer: {
    height: 14,
    width: 320,
    marginBottom: 4,
    color: '#e53e3e',
    fontSize: 12,
    '&#add-car': {
      fontSize: 9,
      height: 20,
      width: 200,
    },
  },
  profileFormContainer: {
    width: '350px',
  },
  label: {
    paddingLeft: 2,
    letterSpacing: 2,
    fontSize: 11,
    marginBottom: 5,
  },
  forgot: {
    fontSize: 16,
    textDecoration: 'underline',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  profileContainer: {
    marginLeft: 5,
    marginRight: 5,
    width: '100%',
  },
  profileTabs: {
    marginTop: 5,
    borderBottom: 1,
    borderColor: 'divider',
    width: '95%',
  },

  profileAvatar: {
    height: '100%',
    width: '100%',
  },
  profileAvatarContainer: {
    position: 'relative',
    display: 'flex',
    height: 250,
    width: 250,
  },
  profileEditAvatar: {
    position: 'absolute',
    right: 20,
    bottom: 0,
  },

  stackLeft: {
    marginRight: '50px',
  },

  addCartButtonsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
}))

export const ProfileSubmitButton = styled(Button)({
  width: '200px',
  background: theme.palette.primary.main,
  color: '#FFFFFF',
  marginTop: '14%',
  marginLeft: '9%',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
})

export const PersonalModalButton = styled(Button)({
  width: '200px',
  background: theme.palette.primary.main,
  color: '#FFFFFF',
  marginRight: '30%',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
})

export const PersonalSubmitButton = styled(Button)({
  width: '400px',
  background: theme.palette.primary.main,
  color: '#FFFFFF',
  marginTop: 5,
  marginBottom: '5px',
  '&:hover': {
    background: theme.palette.primary.dark,
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
  maxHeight: '40px',
  width: '100%',
})

export default useStyles
