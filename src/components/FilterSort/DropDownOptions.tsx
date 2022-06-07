import { MenuItem } from '@mui/material'
import { MouseEvent, useCallback } from 'react'
import { memo } from 'react'
import useStyles from '../../theme/useStyle'
interface Props {
  menu: { name: string }[]
}
const DropDownOptions: React.FC<Props> = ({ menu }) => {
  const classes = useStyles()

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement

    switch (target.name) {
      default:
        break
    }
  }, [])

  return (
    <div>
      {menu.map(item => (
        <MenuItem
          component="button"
          key={item.name}
          className={classes.userBarDropdownButtons}
          onClick={handleClick}
          name={item.name}
        >
          {item.name}
        </MenuItem>
      ))}
    </div>
  )
}

export default memo(DropDownOptions)
