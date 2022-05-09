import { forwardRef, RefObject } from 'react'
import useStyles from '../../styles/useStyle'
import NewsComponent from './NewsComponent'
interface RefType {
  newsRef: RefObject<HTMLDivElement>
}

const News = forwardRef(({ newsRef }: RefType) => {
  const classes = useStyles()

  return (
    <div ref={newsRef} className={classes.homeBlocks}>
      <div id="news-title">
        <h2 className={classes.notifHText}>News</h2>
      </div>
      <NewsComponent />
    </div>
  )
})

export default News
