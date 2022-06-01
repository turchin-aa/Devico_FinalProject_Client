import { Box, Stack, Typography } from '@mui/material'
import { ArrowBackIos } from '@mui/icons-material'
import { useBackStyles } from './backButtonStyles'
import { memo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
  children: React.ReactElement
}

const BackButton: React.FC<Props> = ({ children }) => {
  const classes = useBackStyles()
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(-1)
  }, [])

  return (
    <Box className={classes.navBack}>
      <Stack direction="row">
        <div className={classes.navLinkBack} onClick={handleClick}>
          <ArrowBackIos fontSize="small" />
          <Typography>Back</Typography>
        </div>
      </Stack>
      <div className={classes.profileTitle}>{children}</div>
    </Box>
  )
}

export default memo(BackButton)
