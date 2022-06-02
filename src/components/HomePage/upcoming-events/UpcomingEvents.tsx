import { memo } from 'react'

import ScrollableContainer from '../scrollable-items/ScrollableContainer'

const UpcomingEvents: React.FC = () => {
  return <ScrollableContainer idType={'upcoming-events'} isResentEvent={false} />
}

export default memo(UpcomingEvents)
