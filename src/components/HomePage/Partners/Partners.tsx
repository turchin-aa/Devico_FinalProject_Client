import {forwardRef} from 'react'
import useStyles from '../../styles/useStyle'
import PartnersList from './PartnersList'

const Partners = forwardRef((props:{partnersRef:any}) =>{
  const classes = useStyles()
  return(
    <div ref={props.partnersRef} className={classes.homeBlocks}>
      <div id='partners'>
        <h2>Partners</h2>
      </div>
      <div>
        <PartnersList/>
      </div>
    </div>
  )
})

export default Partners