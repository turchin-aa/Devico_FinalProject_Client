import { memo } from 'react'
import CancelParticipation from './CancelParticipation'
import FormSubmited from './FormSubmited'
import Register from './Register'

const ApplyCancelModals: React.FC = () => {
  return (
    <>
      <Register />
      <CancelParticipation />
      <FormSubmited />
    </>
  )
}

export default memo(ApplyCancelModals)
