import styled from '@emotion/styled'
import { Button, DialogActions } from '@mui/material'
import { Box } from '@mui/system'
import { theme } from '../../../theme/CustomTheme'

export const AddCarConfirmButtonsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  padding: '10px',
})

export const AddCarConfirmButton = styled(Button)({
  width: '160px',
  height: '40px',
  background: theme.palette.primary.main,
  color: '#FFFFFF',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
})

export const AddCarCancelButton = styled(Button)({
  width: '160px',
  height: '40px',
  background: '#fff',
  border: '1px solid #485550',
  color: '#485550',
})

export const DialogActionsStyled = styled(DialogActions)({
  marginRight: '27px',
  marginBottom: '10px',
})
