import {
  createTheme,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { memo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import defaultImg from '../../assets/default.png'
import { RegisterButton } from '../Auth/AuthStyles'
import { userSliceActions } from '../../store/user-slice'

const theme = createTheme()

const CongratModule = () => {
  const dispatch = useAppDispatch()

  const regCartIsShown = useAppSelector(state => state.ui.congratAuth)

  const toggleHandler = useCallback(() => {
    dispatch(uiActions.toggleCongratAuth())
    dispatch(userSliceActions.toggleAuth())
  }, [dispatch])

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} open={regCartIsShown} onClose={toggleHandler}>
      <DialogTitle sx={{ width: '90%', margin: 'auto' }}>
        <Box sx={{ width: '100%' }} component="img" alt="welcome" src={defaultImg} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ fontWeight: 'bold' }}>Welcome!</Typography>
        </DialogContentText>
        <DialogContentText>
          You have successfully logged in to Kharkiv Racing.ua now you have access to your personal
          account
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ dislpay: 'flex', justifyContent: 'start' }}>
        <RegisterButton
          sx={{ width: '35%', marginRight: 'auto' }}
          variant="contained"
          onClick={toggleHandler}
        >
          Cancel
        </RegisterButton>
      </DialogActions>
    </Dialog>
  )
}

export default memo(CongratModule)
