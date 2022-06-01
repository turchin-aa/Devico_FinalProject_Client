import clsx from 'clsx'
import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useStyles from '../theme/useStyle'

const PageNotFound: React.FC = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  const handleNavigation = () => {
    navigate('/')
  }

  return (
    <div
      className={clsx(classes.homePageContainer, classes.pageNotFoundContainer, classes.flexCenter)}
    >
      <div className={classes.pageTitle}>
        <p id="main-text">Is your car's number 404?</p>
        <p id="secondary-text">Because we cannot find it... </p>
      </div>
      <div className={classes.pageNotFound}>
        <div className={classes.pageNotFoundAnimContainer}>
          <div className={classes.pageNotFoundQuestContainer}>
            <span className={classes.pageNotFoundAnimSpan} id="one">
              ?
            </span>
            <span className={classes.pageNotFoundAnimSpan} id="two">
              ?
            </span>
            <span className={classes.pageNotFoundAnimSpan} id="three">
              ?
            </span>
          </div>
          <img
            className={classes.pageNotFoundImg}
            src="https://icon-library.com/images/icon-car-png/icon-car-png-1.jpg"
            alt="car"
          />
        </div>
      </div>
      <div className={classes.pageNotFoundMainText}>
        The only thing you can do is getting back to the{' '}
        <span onClick={handleNavigation}>main page</span>
      </div>
    </div>
  )
}

export default memo(PageNotFound)
