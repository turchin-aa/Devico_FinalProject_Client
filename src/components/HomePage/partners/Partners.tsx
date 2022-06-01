import useStyles from '../../../theme/useStyle'
import PartnersList from './PartnersList'

const Partners: React.FC = () => {
  const classes = useStyles()
  return (
    <div id="partners" className={classes.homeBlocks}>
      <div className={classes.blockTitle}>
        <div id="partners-title">Partners</div>
      </div>
      <div>
        <PartnersList />
      </div>
    </div>
  )
}

export default Partners
