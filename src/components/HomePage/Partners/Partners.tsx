import useStyles from '../../styles/useStyle'
import PartnersList from './PartnersList'

const Partners: React.FC = () => {
  const classes = useStyles()
  return (
    <div id="partners" className={classes.homeBlocks}>
      <div id="partners-title">
        <h2>Partners</h2>
      </div>
      <div>
        <PartnersList />
      </div>
    </div>
  )
}

export default Partners
