import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import SignupForm from './SignupForm'

const SignupModal = () => (
  <Modal className="scrolling" trigger={<Button>Sign Up</Button>} closeIcon>
    <Header icon='archive' content='Sign Up' />
    <Modal.Content>
      <SignupForm />
    </Modal.Content>
  </Modal>
)

export default SignupModal