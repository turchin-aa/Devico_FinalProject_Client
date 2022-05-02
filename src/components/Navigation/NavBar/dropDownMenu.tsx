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

  // const controlLogin = useCallback()

  const handleClick = (name:string)=>{
    switch(name){
      case 'Sign Out':
      case 'Sign In':
        props.handleCloseMenu
        props.setLogged(!props.logged)
        fillIfLogged
        break
      default:
        break
    }
  }

  const fillIfLogged = ()=>{
    return props.logged?setMenu(menuIn):setMenu(menuOut)
  }



  return(
    <Menu ref={props.dropDownRef} 
        onClose={props.handleCloseMenu}
        anchorEl={props.anchorEl} 
        open={Boolean(props.anchorEl)}
        className={classes.userBarDropdown}
        >
        {menu.map((item,index)=>(
          <MenuItem
            component='button' 
            key={index}
            className={classes.userBarDropdownButtons}
            onClick={()=>handleClick(item.name)}
            >
              {item.name}
          </MenuItem>)
          )}        
        
    </Menu>
  )
}

export default DropDownMenu