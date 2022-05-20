import styled from '@emotion/styled'
import { Button, DialogActions } from '@mui/material'
import { Box } from '@mui/system'

export const AddCarConfirmButtonsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  padding: '10px',
}))

export const AddCarConfirmButton = styled(Button)(({ theme }) => ({
  width: '160px',
  height: '40px',
  background: '#9B66B6',
  color: '#FFFFFF',
  '&:hover': {
    background: '#CB87EE',
  },
}))

export const AddCarCancelButton = styled(Button)(({ theme }) => ({
  width: '160px',
  height: '40px',
  background: '#fff',
  border: '1px solid #485550',
  color: '#485550',
}))

export const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  marginRight: '27px',
  marginBottom: '10px',
}))
