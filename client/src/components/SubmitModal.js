import React, { Component } from 'react'
import { Button, Modal, Form, TextArea, Segment } from 'semantic-ui-react'
import { SubmitButton } from '../components/Button/SubmitButton'
import LoginForm from '../components/Login/LoginForm'
import API from "../utils/API"; 
import axios from 'axios'
import styled from 'styled-components';

const StyledModal = styled(Modal)`
	font-family: 'Contrail One' !important;
	font-size: 24px !important;
	text-transform: uppercase !important;
	border-radius: 0 !important;
	color: white !important;
`;

const RedForm = styled(Form) `
font-family: 'Contrail One' !important;
font-size: 14px !important;
border-radius: 0 !important;
color: #d30b0d !important;
`

const StyledButton = styled.button`
  color: white;
  background: #d30b0d;
  font-family: 'Contrail One';
  margin: 0 0.75em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;
`;

const RedSegment = styled(Segment) `
background-color: #d30b0d !important;
box-shadow: none !important;
border-radius: 0 !important;
`

class SubmitModal extends Component {
    constructor (props) {
        super(props)
		this.state = {
            submission: [],
            topic: "",
            pullquote: "",
            language: "",
						date: "",
						open: false,
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
        API.getSubmissions()
          .then(res => {
            console.log(res.data);
            const submission = res.data;
            this.setState({ submission })
            console.log({ submission })
          });
      } 
	_create(topic, pullquote, language, date) {
		axios
			.post('/api/submissions', {
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

	handleSubmit = (event) => {
		// event.preventDefault()
		console.log('handleSubmit')
		this._create(this.state.topic, this.state.pullquote, this.state.language)
		console.log(this.state.topic)
		this.setState({
			redirectTo: '/api/submissions'
		})
	}

  
// state = { open: false }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
         <StyledButton onClick={this.show('tiny')}>Tell Your Story Here! </StyledButton>
     

        <StyledModal className="scrolling" size={size} open={open} onClose={this.close}>
          <RedSegment>
					<Modal.Header>Submit your Story</Modal.Header>
					</RedSegment>
          <Modal.Content>
                <RedForm>
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
                        <Form.TextArea name='Language' label='Your Story' type="text" value={this.state.language} onChange={this.handleChange} />
					 <StyledButton className="submitButton" onClick={this.handleSubmit}>Submit</StyledButton> 

                    </RedForm>
            </Modal.Content>
          {/* <Modal.Actions>
            <Button negative>No</Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.handleSubmit} />
          </Modal.Actions> */}
        </StyledModal>
      </div>
    )
  }
}

export default SubmitModal