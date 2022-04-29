import { useState} from 'react'
import useStyles from '../styles/useStyle'
import {List, ListItem, ListItemText,ListItemIcon} from '@mui/material'
import clsx from 'clsx'
import {Campaign, Article, CalendarMonth, Workspaces, Info, Contacts, LiveHelp, ScatterPlot} from '@mui/icons-material'


const SideBarItem = (props:{executeScroll:any}) =>{
    const classes = useStyles()

    const [list_item, setState] = useState(
      {
        activeButton: {},
        objects:[
          {
            id:1,
            text:'Upcoming events',
            icon:<Campaign />,
            path:'/#upcoming-events'
          },
          {
            id:2,
            text:'Events calendar',
            icon:<CalendarMonth />,
            path:'/#events-calendar'
          },
          {
            id:3,
            text:'News',
            icon:<Article />,
            path:'/#news'
          },
          {
            id:4,
            text:'Partners',
            icon:<Workspaces />,
            path:'/#partners'
          },
          {
            id:5,
            text:'About us',
            icon:<Info />,
            path:'/about-us'
          },
          { id:6,
            text:'Contact us',
            icon:<Contacts />,
            path:'/contact-us'
          },
          { 
            id:7,
            text:'FAQ',
            icon:<LiveHelp />,
            path:'/faq'
          },
          {
            id:8,
            text:'Privasy & Terms of use',
            icon:<ScatterPlot />,
            path:'/ptou'
          }
        ]
      }
    )

    function toggleButton(index:any){
      setState({ ...list_item, activeButton:list_item.objects[index]})
    }
    
    function toggleActiveClass(index:any){
      if(list_item.objects[index] === list_item.activeButton ){
        return classes.active
      }else{
        return classes.inactive
      }
    
    }

    return(
      <div>
      <List>
          {list_item.objects.map((item,index) =>(
            <ListItem 
            key={index} 
            className={clsx(toggleActiveClass(index), classes.item)}
            onClick={()=>{
              toggleButton(index)
              props.executeScroll(item.path)
            }} >  
                <ListItemIcon>
                 {item.icon}
                </ListItemIcon>
                <ListItemText className={classes.text} primary={item.text}/>
            </ListItem>
          ))}
        </List>
      </div>
    )

}

export default SideBarItem