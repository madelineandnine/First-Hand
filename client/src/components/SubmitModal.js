import React, { Component } from 'react'
import { Button, Modal, Form, TextArea } from 'semantic-ui-react'
import { SubmitButton } from '../components/Button/SubmitButton'
import LoginForm from '../components/Login/LoginForm'
import API from "../utils/API"; 
import axios from 'axios'

class SubmitModal extends Component {
    constructor (props) {
        super(props)
		this.state = {
            submission: [],
            topic: "",
            pullquote: "",
            language: "",
            date: "",
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
    componentDidMount() {
        API.addSubmission()
          .then(res => {
            console.log(res.data);
            const submission = res.data;
            this.setState({ submission })
            console.log({ submission })
          });
      } 
	_create(topic, pullquote, language, date) {
		axios
			.post('/api/submission', {
                topic, 
                pullquote, 
                language, 
                date
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						
					})
				}
			})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this._create(this.state.topic, this.state.pullquote, this.state.language)
		console.log(this.state.topic)
		this.setState({
			redirectTo: '/api/submissions'
		})
	}

  
state = { open: false }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('tiny')}>Tell Your Story Here! </Button>
     

        <Modal className="scrolling" size={size} open={open} onClose={this.close}>
          <Modal.Header>Submit your Story</Modal.Header>
          <Modal.Content>
                <Form>
                <Form.Field>
						<label htmlFor="topic">Topic </label>
						<input
							type="text"
							name="topic"
							value={this.state.topic}
							onChange={this.handleChange}
						/>
						</Form.Field>
                    <Form.Field>
                    <label htmlFor="pullquote">Summary </label>
						<input
							type="text"
							name="pullquote"
							value={this.state.pullquote}
							onChange={this.handleChange}
						/>
						</Form.Field>
                        <Form.TextArea label='language' placeholder='Tell your story...' value={this.state.language} onChange={this.handleChange} />

					 <Button className="submitButton" onClick={this.handleSubmit}>Submit</Button> 
                    </Form>
            </Modal.Content>
          {/* <Modal.Actions>
            <Button negative>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.handleSubmit} />
          </Modal.Actions> */}
        </Modal>
      </div>
    )
  }
}

export default SubmitModal