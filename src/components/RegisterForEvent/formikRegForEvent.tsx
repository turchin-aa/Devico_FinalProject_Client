import * as yup from 'yup'
import { sagaActions } from '../../store/saga-actions'

export const regForEventData = {
  initialValues: {
    desiredParticipantNumber: '',
  },

  validationSchema: yup.object().shape({
    desiredParticipantNumber: yup
      .string()
      .max(32)
      .required('Desired participant number is required')
      .nullable(false),
  }),
  onSubmitType: sagaActions.USER_NEWPASS_SAGA,
}

export const cancelParticipationData = {
  initialValues: {
    reson: '',
  },

  validationSchema: yup.object().shape({
    reson: yup.string().max(255),
  }),
  onSubmitType: sagaActions.USER_NEWPASS_SAGA,
}
