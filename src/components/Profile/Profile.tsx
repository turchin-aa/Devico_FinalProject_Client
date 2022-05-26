import { FC, memo, useCallback, useState } from 'react'
import { Tabs, Tab, Box, Stack, Typography } from '@mui/material'
import ProfilePanel from './ProfilePanel'
import PersonalData from './PersonalData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ProfileData from './ProfileData'
import AddCarModal from './AddCarModal/AddCarModal'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'
import useStyles from './ProfileStyles'

const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Profile: FC = () => {
  const [value, setValue] = useState(0)
  const classes = useStyles()

  const isAuth = useAppSelector(state => state.user.isAuth)
  const dispatch = useAppDispatch()

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }, [])

  return isAuth ? (
    <Box className={classes.profileContainer}>
      <AddCarModal />
      <Box className={classes.navBack}>
        <Stack direction="row">
          <Link to="/" className={classes.navLinkBack}>
            <ArrowBackIosIcon fontSize="small" />
            <Typography>Back</Typography>
          </Link>
        </Stack>
        <div className={classes.profileTitle}>My Profile</div>
      </Box>
      <Box className={classes.profileTabs}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="PROFILE DATA" {...allyProps(0)} />
          <Tab label="PERSONAL DATA" {...allyProps(1)} />
        </Tabs>
      </Box>
      <ProfilePanel value={value} index={0}>
        <ProfileData />
      </ProfilePanel>
      <ProfilePanel value={value} index={1}>
        <PersonalData />
      </ProfilePanel>
    </Box>
  ) : null
}

export default memo(Profile)
