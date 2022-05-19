import { MenuContainer } from '../style/ElementsStyled'
import { memo } from 'react'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  className?: string
}

const DropDownMenu: React.FC<Props> = ({ children, isOpen, className }) => {
  console.log(isOpen)
  return (
    <MenuContainer isOpen={isOpen} className={className}>
      {children}
    </MenuContainer>
  )
}

export default memo(DropDownMenu)
