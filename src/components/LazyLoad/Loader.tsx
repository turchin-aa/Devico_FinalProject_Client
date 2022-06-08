import clsx from 'clsx'
import { memo } from 'react'
import useStyles from '../../theme/useStyle'

const Loader: React.FC = () => {
  const classes = useStyles()
  return <div className={clsx(classes.loader, classes.flexCenter)}>Loading...</div>
}
export default memo(Loader)
