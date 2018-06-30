import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import LoginForm from './LoginForm'



const LoginModal = () => (
  <Modal className="scrolling" trigger={<Button>Login</Button>} closeIcon>
    <Header icon='archive' content='Login' />
    <Modal.Content>
        <LoginForm />
    </Modal.Content>
  </Modal>
)

export default LoginModal