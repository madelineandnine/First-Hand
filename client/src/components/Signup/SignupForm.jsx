import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './signup.css'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/api/submissions'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			 <div className="login-form">
			 <Grid textAlign='center' style={{ height: '100%' }}> 
      				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
          				Create an Account
       				</Header>
					<Form size='large'>
					<Segment>
						<Form.Field>
				<label htmlFor="username">Username </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/> 
				</Form.Field>
				<Form.Field>
				<label htmlFor="password">Password </label> 
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/> 
				</Form.Field>
				<Form.Field>
				<label htmlFor="confirmPassword">Confirm Password </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				</Form.Field>
				<Button color='teal' style={{ margin: '10px' }} onClick={this.handleSubmit}>Sign up</Button>
				</Segment>
					</Form>
					<Message>
          Already have an account? <a href='/login'>Login</a>
        </Message>
					</Grid.Column>
    </Grid>
			</div> 
		)
	}
}

export default SignupForm
