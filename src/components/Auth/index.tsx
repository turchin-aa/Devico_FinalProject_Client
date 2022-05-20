import CongratModal from '../CongratModal/CongratModal'
import PassRecover from '../PasswordRecover/PassRecover'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

function Auth() {
  return (
    <>
      <SignUp />
      <SignIn />
      <PassRecover />
      <CongratModal />
    </>
  )
}

export default Auth
