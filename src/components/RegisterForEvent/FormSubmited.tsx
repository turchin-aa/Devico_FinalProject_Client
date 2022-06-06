import { Box, DialogActions } from '@mui/material'
import { memo, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import { RegisterButton } from '../Auth/AuthStyles'
import { useCongratsStyles } from '../CongratModal/useCongratsStyle'
import ModalContainer from '../Modal/ModalContainer'

const FormSubmited: React.FC = () => {
  const formSubmitedCartIsShown = useAppSelector<boolean>(state => state.ui.showFormSubmited)
  const dispatch = useAppDispatch()
  const classes = useCongratsStyles()

  const toggleHandler = useCallback(() => {
    dispatch(uiActions.toggleShowFormSubmited())
  }, [dispatch])

  return (
    <ModalContainer
      dispatchAction={uiActions.toggleShowFormSubmited()}
      cartIsShown={formSubmitedCartIsShown}
    >
      <Box>
        <div className={classes.infoMessege}>Your form was successfully submited!</div>
        <div className={classes.forSubmitedInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </div>
        <div className={classes.dialogActionsContainer}>
          <DialogActions className={classes.dialogActions}>
            <RegisterButton id="cancel" variant="contained" onClick={toggleHandler}>
              Cancel
            </RegisterButton>
          </DialogActions>
        </div>
      </Box>
    </ModalContainer>
  )
}

export default memo(FormSubmited)
