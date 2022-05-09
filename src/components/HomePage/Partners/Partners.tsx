import { forwardRef, RefObject } from 'react'
import useStyles from '../../styles/useStyle'
import PartnersList from './PartnersList'
interface RefType {
  partnersRef: RefObject<HTMLDivElement>
}

const Partners = forwardRef(({ partnersRef }: RefType) => {
  const classes = useStyles()
  return (
    <div ref={partnersRef} className={classes.homeBlocks}>
      <div id="partners">
        <h2>Partners</h2>
      </div>
      <div>
        <PartnersList />
      </div>
    </div>
  )
})

export default Partners
