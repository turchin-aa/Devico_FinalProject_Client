import { memo } from 'react'

import ScrollableContainer from '../scrollable-items/ScrollableContainer'

const UpcomingEvents: React.FC = () => {
  return <ScrollableContainer idType={'upcoming-events'} resent={false} />
}

export default memo(UpcomingEvents)
