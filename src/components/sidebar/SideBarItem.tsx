import { useState, useCallback, MouseEvent } from 'react'
import useSideBarStyles from './SideBarStyles'
import { List, ListItem } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'
import DynamicIcon from '../DynamicIcon'
import clsx from 'clsx'

const scrollWithOffset = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
  const yOffset = -60
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
}

const SideBarItem: React.FC = () => {
  const classes = useSideBarStyles()

  const [list_item, setState] = useState({
    activeButton: {},
    objects: [
      {
        id: 0,
        text: 'Upcoming events',
        icon: 'Campaign',
        path: '/#upcoming-events',
      },
      {
        id: 1,
        text: 'Events calendar',
        icon: 'CalendarMonth',
        path: '/#events-calendar',
      },
      {
        id: 2,
        text: 'News',
        icon: 'Article',
        path: '/#news',
      },
      {
        id: 3,
        text: 'Partners',
        icon: 'Workspaces',
        path: '/#partners',
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
    (e: any) => {
      const target = e.currentTarget as HTMLLIElement
      const ariaLabel = target.ariaLabel as string
      setState({ ...list_item, activeButton: list_item.objects[parseInt(ariaLabel)] })
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
          <Link
            key={item.id}
            to={item.path}
            smooth
            scroll={scrollWithOffset}
            aria-label={item.id.toString()}
            className={classes.link}
            onClick={toggleButton}
          >
            <ListItem
              className={clsx(toggleActiveClass(item.id), classes.item, classes.flexCenter)}
              id={item.text}
            >
              <div className={classes.iconAlign}>
                <DynamicIcon iconName={item.icon} className="" />
              </div>
              <span className={classes.text}>{item.text}</span>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
}

export default SideBarItem
