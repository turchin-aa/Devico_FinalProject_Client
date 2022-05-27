import { ClickAwayListener, Fade, Paper, Popper } from '@mui/material'
import { memo, RefObject } from 'react'

interface Props {
  children: React.ReactElement
  anchorRef: RefObject<HTMLDivElement>
  isOpen: boolean
  className?: string
  popperClassName?: string
  popperPosition?: boolean
  handleClose: (event: Event) => void
}

const DropDownMenu: React.FC<Props> = ({
  children,
  popperClassName,
  anchorRef,
  isOpen,
  className,
  popperPosition,
  handleClose,
}) => {
  return (
    <Popper
      open={isOpen}
      anchorEl={anchorRef.current}
      className={popperClassName}
      role={undefined}
      style={{ position: popperPosition ? 'absolute' : 'fixed', top: popperPosition ? 35 : 0 }}
      disablePortal={true}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <Fade in={isOpen}>
          <Paper className={className}>{children}</Paper>
        </Fade>
      </ClickAwayListener>
    </Popper>
  )
}

export default memo(DropDownMenu)
