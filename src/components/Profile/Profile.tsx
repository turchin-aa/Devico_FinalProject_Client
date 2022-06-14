import { FC, memo, useCallback, useState, lazy, Suspense } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import ProfilePanel from './ProfilePanel'
import { useAppSelector } from '../../hooks/redux.hook'
import Loader from '../LazyLoad/Loader'

import useStyles from './ProfileStyles'
import BackButton from '../BackArrowButton/BackButton'

const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const AddCarModal = lazy(() => import('./AddCarModal/AddCarModal'))
const ProfileData = lazy(() => import('./ProfileData'))
const PersonalData = lazy(() => import('./PersonalData'))

const Profile: FC = () => {
  const [value, setValue] = useState(0)
  const classes = useStyles()

  const isAuth = useAppSelector<boolean>(state => state.user.isAuth)

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }, [])

  return isAuth ? (
    <Box className={classes.profileContainer}>
      <Suspense fallback={<Loader />}>
        <AddCarModal />
      </Suspense>
      <BackButton>
        <span>My Profile</span>
      </BackButton>
      <Box className={classes.profileTabs}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="PROFILE DATA" {...allyProps(0)} />
          <Tab label="PERSONAL DATA" {...allyProps(1)} />
        </Tabs>
      </Box>
      <ProfilePanel value={value} index={0}>
        <Suspense fallback={<Loader />}>
          <ProfileData />
        </Suspense>
      </ProfilePanel>
      <ProfilePanel value={value} index={1}>
        <Suspense fallback={<Loader />}>
          <PersonalData />
        </Suspense>
      </ProfilePanel>
    </Box>
  ) : null
}

export default memo(Profile)
