import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from '@mui/material'
import { memo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import defaultImg from '../../assets/default.png'
import { RegisterButton } from '../Auth/AuthStyles'
import { useCongratsStyles } from './useCongratsStyle'
import { theme } from '../../theme/CustomTheme'

const CongratModule = () => {
  const classes = useCongratsStyles()
  const dispatch = useAppDispatch()

  const regCartIsShown = useAppSelector(state => state.ui.congratAuth)

  const toggleHandler = useCallback(() => {
    dispatch(uiActions.toggleCongratAuth())
  }, [dispatch])

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={regCartIsShown}
      onClose={toggleHandler}
      className={classes.dialog}
    >
      <div className={classes.dialogContainer}>
        <div>
          <DialogTitle className={classes.dialogTitle}>
            <Box className={classes.dialogBox} component="img" alt="welcome" src={defaultImg} />
          </DialogTitle>
        </div>
        <div className={classes.dialogContent}>
          <DialogContent>
            <DialogContentText className={classes.dialogText}>
              <div id="welcome">Welcome!</div>
              <div id="text">
                You have successfully logged in to Kharkiv Racing.ua. Now you have access to your
                personal account
              </div>
            </DialogContentText>
            <div className={classes.dialogActionsContainer}>
              <DialogActions className={classes.dialogActions}>
                <RegisterButton id="cancel" variant="contained" onClick={toggleHandler}>
                  Cancel
                </RegisterButton>
              </DialogActions>
            </div>
          </DialogContent>
        </div>
      </div>
    </Dialog>
  )
}

export default memo(CongratModule)
