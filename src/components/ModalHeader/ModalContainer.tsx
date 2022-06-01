import { Dialog, DialogContent, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import { memo, useCallback } from 'react'
import { Close } from '@mui/icons-material'
import { CloseButton, LinkTypography, SignLink } from '../Auth/AuthStyles'
import { useAuthStyles } from '../Auth/useAuthStyles'
import { useAppDispatch } from '../../hooks/redux.hook'
import { AnyAction } from '@reduxjs/toolkit'
import { theme } from '../../theme/CustomTheme'
import { uiActions } from '../../store/ui-slice'

interface Props {
  children: React.ReactElement
  modalType: string
  dispatchAction: AnyAction
  cartIsShown: boolean
  resetForm: Function
  setPass?: Function
}

const ModalContainer: React.FC<Props> = ({
  modalType,
  children,
  dispatchAction,
  cartIsShown,
  resetForm,
  setPass,
}) => {
  const dispatch = useAppDispatch()
  const classes = useAuthStyles()

  const toggleHandler = useCallback(() => {
    if (cartIsShown) {
      dispatch(dispatchAction)
    }
    resetForm()
    if (setPass) {
      setPass(false)
    }
  }, [dispatch, cartIsShown])

  const changeHandler = useCallback(() => {
    dispatch(uiActions.toggleReg())
    dispatch(uiActions.toggleLog())
  }, [dispatch])

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog fullScreen={fullScreen} fullWidth open={cartIsShown} onClose={toggleHandler}>
      <Typography component="h1" variant="h5" className={classes.flexCenter}>
        <p className={classes.titleTypo}> {modalType} </p>
        <CloseButton onClick={toggleHandler}>
          <Close />
        </CloseButton>
      </Typography>
      <Divider />
      <DialogContent>
        {children}
        {modalType == 'Sign In' || modalType == 'Sign up' ? (
          <Grid container justifyContent="center">
            <Grid item>
              <LinkTypography>
                {modalType == 'Sign up' ? 'Already a member?' : 'No account?'}
                &nbsp;
                <SignLink onClick={changeHandler}>
                  {modalType == 'Sign up' ? 'Sign in' : 'Sign up'}
                </SignLink>
              </LinkTypography>
            </Grid>
          </Grid>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}

export default memo(ModalContainer)
