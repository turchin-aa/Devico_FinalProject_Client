import useWelcomeStyles from './useWelcomeStyles'
import WelcomeEvent from './WelcomeEventComponent'
import WelcomeText from './WelcomeTextBlock'

const Welcome: React.FC = () => {
  const classes = useWelcomeStyles()
  return (
    <div className={classes.welcomeFlexCenter}>
      <WelcomeText />
      <WelcomeEvent />
    </div>
  )
}

export default Welcome
