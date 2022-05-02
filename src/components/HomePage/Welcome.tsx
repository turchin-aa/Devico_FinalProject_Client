import useStyles from '../styles/useStyle'
import WelcomeEvent from'./WelcomeEventComponent'
import WelcomeText from'./WelcomeTextBlock'


const Welcome: React.FC = () =>{
  const classes = useStyles()
  return(
    <div className={classes.flexCenter}>
      <WelcomeText/>
      <WelcomeEvent/> 
    </div>
  )
}

export default Welcome