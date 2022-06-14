import { FC } from 'react'
import { useNavbarStyles } from '../style/useNavbarStyles'
import info from '../../../assets/picture.webp'
import CloseIcon from '@mui/icons-material/Close'

interface props {
  text: string
  color: object
}

const Notification: FC<props> = (props: props) => {
  const classes = useNavbarStyles()

  return (
    <div className={classes.wrapper} style={props.color}>
      <img src={info} alt="1" className={classes.info} />
      <div className={classes.text}>{props.text}</div>
      <CloseIcon className={classes.cross} />
    </div>
  )
}

export default Notification
