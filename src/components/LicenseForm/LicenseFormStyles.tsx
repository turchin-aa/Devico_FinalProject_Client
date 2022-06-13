import {
  Divider,
  FormControlLabel,
  Stack,
  styled,
  Theme,
  TextField,
  Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import ArticleIcon from '@mui/icons-material/Article'

export const useStyles = makeStyles((theme: Theme) => ({
  label: {
    paddingLeft: 2,
    letterSpacing: 2,
    fontSize: 11,
    marginBottom: 5,
  },
  errorContainer: {
    height: 14,
    width: 320,
    marginBottom: 4,
    color: '#e53e3e',
    fontSize: 12,
  },
  zone: {
    border: '1px dashed #BDBDBD',
    borderRadius: '3px',
    width: '195px',
    height: '148px',
    marginLeft: '20px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  profileAvatarContainer: {
    position: 'relative',
    display: 'flex',
    height: 250,
    width: 250,
  },
}))

export const MainStackForm = styled(Stack)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirectyon: 'column',
    gap: '0px',
  },
}))

export const StackLicenseForm = styled(Stack)({
  height: '500px',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignContent: 'start',
})

export const StyledArticleIcon = styled(ArticleIcon)({
  display: 'flex',
})

export const LabelInput = styled(Typography)({
  marginTop: '40px',
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '22px',
  marginLeft: '20px',
  marginBottom: '5px',
})

export const StyledTextField = styled(TextField)({
  marginTop: '10px',
  width: '400px',
})

export const StyledTypography = styled(Typography)({
  marginTop: '15px',
  letterSpacing: '2px',
  fontSize: '13px',
})

export const Label = styled(FormControlLabel)({
  marginBottom: '30px',
  marginRight: '50px',
  '&:last-child': {
    marginBottom: 0,
    height: '50px',
    marginTop: '30px',
    width: '275px',
  },
  '&:first-child': {
    marginTop: '10px',
  },
  '&:nth-child(3)': {
    marginBottom: 0,
  },
  '&:nth-child(2)': {
    marginBottom: '20px',
  },
})

export const DividerCard = styled(Divider)({
  marginTop: '4px',
  marginBottom: '4px',
})

export const StackCard = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export default useStyles
