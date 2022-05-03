import { useState, useCallback} from 'react'
import useStyles from '../../styles/useStyle'
import {List, ListItem,Box} from '@mui/material'
import DynamicIcon from '../../DynamicIcon';
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
            icon:'Campaign',
            path:'/#upcoming-events'
          },
          {
            id:2,
            text:'Events calendar',
            icon:'CalendarMonth',
            path:'/#events-calendar'
          },
          {
            id:3,
            text:'News',
            icon:'Article',
            path:'/#news'
          },
          {
            id:4,
            text:'Partners',
            icon:'Workspaces',
            path:'/#partners'
          },
          {
            id:5,
            text:'About us',
            icon:'Info',
            path:'/about-us'
          },
          { id:6,
            text:'Contact us',
            icon:'Contacts',
            path:'/contact-us'
          },
          { 
            id:7,
            text:'FAQ',
            icon:'LiveHelp',
            path:'/faq'
          },
          {
            id:8,
            text:'Privasy & Terms of use',
            icon:'ScatterPlot',
            path:'/ptou'
          }
        ]
      }
  )
  const toggleButton =  useCallback((index:number)=>{
      setState({ ...list_item, activeButton:list_item.objects[index]})
   },[list_item])
    
  const toggleActiveClass = useCallback((index:number) => {
      return (list_item.objects[index] === list_item.activeButton)?classes.active:classes.inactive 
  },[list_item])

    return(
      <div>
      <List>
          {list_item.objects.map((item,index) =>(
            <ListItem 
            key={index} 
            className={clsx(toggleActiveClass(index), classes.item, classes.flexCenter)}
            onClick={()=>{
              toggleButton(index)
              props.executeScroll(item.path)
            }} >  
                <DynamicIcon iconName={item.icon} className=""/>  
                <p className={classes.text}>{item.text}</p>
            </ListItem>
          ))}
        </List>
      </div>
    )

}

export default SideBarItem