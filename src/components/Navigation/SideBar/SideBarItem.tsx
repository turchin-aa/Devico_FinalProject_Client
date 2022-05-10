import { useState, useCallback, MouseEvent } from 'react'
import useStyles from '../../styles/useStyle'
import { List, ListItem } from '@mui/material'
import DynamicIcon from '../../DynamicIcon'
import clsx from 'clsx'

const SideBarItem = ({ executeScroll }: { executeScroll: (path: string) => void }) => {
  const classes = useStyles()

  const [list_item, setState] = useState({
    activeButton: {},
    objects: [
      {
        id: 0,
        text: 'Upcoming events',
        icon: 'Campaign',
      },
      {
        id: 1,
        text: 'Events calendar',
        icon: 'CalendarMonth',
      },
      {
        id: 2,
        text: 'News',
        icon: 'Article',
      },
      {
        id: 3,
        text: 'Partners',
        icon: 'Workspaces',
      },
      {
        id: 4,
        text: 'About us',
        icon: 'Info',
        path: '/about-us',
      },
      { id: 5, text: 'Contact us', icon: 'Contacts', path: '/contact-us' },
      {
        id: 6,
        text: 'FAQ',
        icon: 'LiveHelp',
        path: '/faq',
      },
      {
        id: 7,
        text: 'Privasy & Terms of use',
        icon: 'ScatterPlot',
        path: '/ptou',
      },
    ],
  })

  const toggleButton = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      const target = e.currentTarget as HTMLLIElement
      const ariaLabel = target.ariaLabel as string
      setState({ ...list_item, activeButton: list_item.objects[parseInt(ariaLabel)] })
      executeScroll(target.id)
    },
    [list_item],
  )

  const toggleActiveClass = useCallback(
    (index: number) => {
      return list_item.objects[index] === list_item.activeButton ? classes.active : classes.inactive
    },
    [list_item],
  )

  return (
    <div>
      <List className={classes.responsiveList}>
        {list_item.objects.map(item => (
          <ListItem
            id={item.text}
            key={item.id}
            className={clsx(toggleActiveClass(item.id), classes.item, classes.flexCenter)}
            aria-label={item.id.toString()}
            onClick={toggleButton}
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
