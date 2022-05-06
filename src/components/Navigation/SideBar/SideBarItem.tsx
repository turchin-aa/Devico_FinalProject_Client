import { useState, useCallback, useEffect } from 'react'
import useStyles from '../../styles/useStyle'
import { List, ListItem } from '@mui/material'
import DynamicIcon from '../../DynamicIcon'
import clsx from 'clsx'

const SideBarItem = (props: { executeScroll: any }) => {
  const classes = useStyles()

  const [list_item, setState] = useState({
    activeButton: {},
    objects: [
      {
        id: 1,
        text: 'Upcoming events',
        icon: 'Campaign',
        path: '/#upcoming-events',
      },
      {
        id: 2,
        text: 'Events calendar',
        icon: 'CalendarMonth',
        path: '/#events-calendar',
      },
      {
        id: 3,
        text: 'News',
        icon: 'Article',
        path: '/#news',
      },
      {
        id: 4,
        text: 'Partners',
        icon: 'Workspaces',
        path: '/#partners',
      },
      {
        id: 5,
        text: 'About us',
        icon: 'Info',
        path: '/about-us',
      },
      { id: 6, text: 'Contact us', icon: 'Contacts', path: '/contact-us' },
      {
        id: 7,
        text: 'FAQ',
        icon: 'LiveHelp',
        path: '/faq',
      },
      {
        id: 8,
        text: 'Privasy & Terms of use',
        icon: 'ScatterPlot',
        path: '/ptou',
      },
    ],
  })

  useEffect(() => {}, [list_item])

  const toggleButton = useCallback(
    (index: number) => {
      setState({ ...list_item, activeButton: list_item.objects[index] })
    },
    [list_item]
  )

  const toggleActiveClass = useCallback(
    (index: number) => {
      return list_item.objects[index] === list_item.activeButton
        ? classes.active
        : classes.inactive
    },
    [list_item]
  )

  return (
    <div>
      <List className={classes.responsiveList}>
        {list_item.objects.map((item, index) => (
          <ListItem
            key={index}
            className={clsx(
              toggleActiveClass(index),
              classes.item,
              classes.flexCenter
            )}
            onClick={() => {
              toggleButton(index)
              props.executeScroll(item.path)
            }}
          >
            <div className={classes.iconAlign}>
              <DynamicIcon iconName={item.icon} className="" />
            </div>
            <span className={classes.text}>{item.text}</span>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default SideBarItem
