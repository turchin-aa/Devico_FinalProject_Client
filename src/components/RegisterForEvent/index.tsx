import { memo } from 'react'
import CancelParticipation from './CancelParticipation'
import Register from './Register'

const ApplyCancelModals: React.FC = () => {
  return (
    <>
      <Register />
      <CancelParticipation />
    </>
  )
}

export default memo(ApplyCancelModals)
