import useStyles from '../../../theme/useStyle'
import NewsComponent from './NewsComponent'

const News: React.FC = () => {
  const classes = useStyles()

  return (
    <div id="news" className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="news-title">News</div>
      </div>
      <NewsComponent />
    </div>
  )
}

export default News
