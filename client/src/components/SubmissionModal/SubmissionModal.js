import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import SubmitButton from '../Button/SubmitButton'
import LoginForm from './LoginForm'
import './SubmissionModal.css'


class LoginModal extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <SubmitButton id="submissionButton" onClick={this.show('tiny')}></SubmitButton>
     

        <Modal className="scrolling" size={size} open={open} onClose={this.close}>
          <Modal.Header></Modal.Header>
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

export default SubmissionModal