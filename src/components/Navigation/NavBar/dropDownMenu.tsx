import {Menu,MenuItem} from '@mui/material'
import { useState, useCallback } from 'react'
import useStyles from '../../styles/useStyle'

const DropDownMenu = (props:{dropDownRef:any, anchorEl:any,handleCloseMenu:any, logged:boolean, setLogged:any})=>{
  const menuOut = [{
    name:'Sign In',
    path:''
    },
    {name:'Sign Up',
    path:''
    }]
  const menuIn = [{
    name:'Profile',
    path:''
    },
    {name:'My events',
    path:''
    },
    {name:'Sign Out',
    path:''
    }]
  
  const classes = useStyles()
  const [menu, setMenu] = useState(props.logged?menuIn:menuOut)

  const fillIfLogged = useCallback(()=>{
    return props.logged?setMenu(menuIn):setMenu(menuOut)
  },[menu])



  return(
    <Menu ref={props.dropDownRef} 
        onClose={props.handleCloseMenu}
        anchorEl={props.anchorEl} 
        open={Boolean(props.anchorEl)}
        className={classes.userBarDropdown}
        >
        {menu.map((item,index)=>(
          <MenuItem 
            key={index}
            className={classes.userBarDropdownButtons}>
              {item.name}
          </MenuItem>)
          )}        
        
    </Menu>
  )
}

export default DropDownMenu