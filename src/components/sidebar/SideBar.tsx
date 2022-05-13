import useSideBarStyles from './SideBarStyles'
import SideBarItem from './SideBarItem'
import { Drawer, CardMedia, Link } from '@mui/material'

const SideBar: React.FC = () => {
  const classes = useSideBarStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.container}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.logoBlock}>
        <Link href="/">
          <CardMedia
            component="img"
            src="data:image/webp;base64,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"
          />
        </Link>
      </div>

      <SideBarItem />
    </Drawer>
  )
}

export default SideBar