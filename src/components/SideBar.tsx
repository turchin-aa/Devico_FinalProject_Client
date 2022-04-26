import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {makeStyles} from '@mui/styles'
import {Container, Drawer, Typography, 
  List, ListItem, ListItemText,ListItemIcon,
  Link} from '@mui/material'
import {Campaign, Article, CalendarMonth, Workspaces, Info, Contacts, LiveHelp, ScatterPlot} from '@mui/icons-material'


// const drawerWidth = 180

const useStyles = makeStyles(theme=>({
    container:{
      width:'22%',
      position:'sticky',
      top:0,
      // marginLeft:'0px',
      // height:'100vh',
      
    },
    footerMenu:{
      marginTop:'70%'
    },
    item:{
      height:'50px',
      cursor: 'pointer',
      backgroundColor:'#9470CE',
      color: '#fff',
      fontSize:'0.5em',
      marginBottom: theme.spacing(2),

      "@media screen and {max-width:960px}": {
           marginBottom:theme.spacing(0),
        
        } ,
      
      "&:hover":{
        backgroundColor:'#A083D5',
        // transform
      }
      
    },

    text:{
      "@media screen and {max-width:960px}":{
           display: 'none'
         }
    }


}))



const SideBar: React.FC = (props) =>{
  console.log(props)
  const classes = useStyles()
  const navigate = useNavigate()

  const footerMenuItems = [
    {
      text:'About us',
      icon:<Info />,
      path:'/about-us'
    },
    {
      text:'Contact us',
      icon:<Contacts />,
      path:'/contact-us'
    },
    {
      text:'FAQ',
      icon:<LiveHelp />,
      path:'/faq'
    },
    {
      text:'Privasy & Terms of use',
      icon:<ScatterPlot />,
      path:'/ptou'
    }
  ]

  const menuItems = [
    {
      text:'Upcoming events',
      icon:<Campaign />,
      path:'/#upcoming-events'
    },
    {
      text:'Events calendar',
      icon:<CalendarMonth />,
      path:'/#events-calendar'
    },
    {
      text:'News',
      icon:<Article />,
      path:'/#news'
    },
    {
      text:'Partners',
      icon:<Workspaces />,
      path:'/#partners'
    }
  ]
  
  return (
    <Drawer variant="permanent" className={classes.container}> 
      <div>
        <Typography>
          LOGO
        </Typography>
      </div>

      <List>
        {menuItems.map(item =>(
          <ListItem 
          button
          key={item.text} 
          className={classes.item}
          // to={item.path}
          onClick={()=>{navigate(item.path)}}
          >
            
              <ListItemIcon>
               {item.icon}
              </ListItemIcon>
               <ListItemText className={classes.text} primary={item.text}/>
            
            
          </ListItem>
        ))}
      </List>

      <List className={classes.footerMenu}>
        {footerMenuItems.map(item =>(
          <ListItem button key={item.text} className={classes.item} onClick={()=>{navigate(item.path)}}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText className={classes.text} primary={item.text}/>
          </ListItem>
        ))}
      </List>

    </Drawer>
  )
}


export default SideBar;
