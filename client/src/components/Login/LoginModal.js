import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import LoginForm from './LoginForm'

class LoginModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('tiny')}>Login</Button>
     

        <Modal className="scrolling" size={size} open={open} onClose={this.close}>
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
              <LoginForm />
            </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default LoginModal