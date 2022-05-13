import { Menu } from '@mui/material'

interface Props {
  children: React.ReactNode
  anchorEl: Element | null
  handleCloseMenu: () => void
  className?: string
}

const DropDownMenu: React.FC<Props> = ({ children, anchorEl, handleCloseMenu, className }) => {
  return (
    <Menu
      onClose={handleCloseMenu}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      className={className}
    >
      {children}
    </Menu>
  )
}

export default DropDownMenu
