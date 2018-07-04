import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Icon, Modal, Message, Segment } from 'semantic-ui-react'
import axios from 'axios'
import Nav from '../Nav'




class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
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

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this._login(this.state.username, this.state.password)
		console.log(this.state.username)
		this.setState({
			redirectTo: '/api/submissions'
		})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="login-form">
				<Grid textAlign='center' style={{ height: '100%' }} >
      				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
          				Login to your Account
       				</Header>
					<Form size='large'>
					<Segment stacked>
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
						<Button color='teal' style={{ margin: '10px' }}onClick={this.handleSubmit}>Login</Button>
						</Segment>
					</Form>
					<Message>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
	
					
				</div>
			)
		}
	}
}

export default LoginForm
