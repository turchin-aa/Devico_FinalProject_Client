import { forwardRef } from 'react'
import useStyles from '../../styles/useStyle'
import NewsComponent from './NewsComponent'

const News = forwardRef((props: { newsRef: any }) => {
  const classes = useStyles()

  return (
    <div ref={props.newsRef} className={classes.homeBlocks}>
      <div id="news-title">
        <h2 className={classes.notifHText}>News</h2>
      </div>
      <NewsComponent />
    </div>
  )
})

export default News
