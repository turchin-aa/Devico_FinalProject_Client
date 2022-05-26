import { FC, memo, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ProfilePanel from './ProfilePanel'
import PersonalData from './PersonalData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Stack, Typography } from '@mui/material'
import ProfileData from './ProfileData'
import AddCarModal from './AddCarModal/AddCarModal'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/redux.hook'
import { uiActions } from '../../store/ui-slice'

const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Profile: FC = () => {
  const [value, setValue] = useState(0)

  const isAuth = useAppSelector<boolean>(state => state.user.isAuth)
  const dispatch = useAppDispatch()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return isAuth ? (
    <Box sx={{ width: '100%' }}>
      <AddCarModal />
      <Box sx={{ paddingLeft: '10px', marginTop: '7%' }}>
        <Stack direction="row">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <ArrowBackIosIcon sx={{ height: '15px' }} />
            <Typography> Back</Typography>
          </Link>
        </Stack>
        <Typography variant="h5" component="div">
          My Profile
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '95%', mt: '1%' }}>
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
