import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import './Nav.css'
import LoginForm from '../Login/LoginForm'
import LoginModal from '../Login/LoginModal'
import SignupForm from '../Signup/SignupForm'
import SignupModal from '../Signup/SignupModal'
//import Header from './components/Header'
import Home from '../Home'
import Submissions from '../../pages/Submissions'
import {
	Button,
	Header,
	Menu,
	} from 'semantic-ui-react'
import styled from 'styled-components'


const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				
				<ul className="nav">
					<li className="nav-item">
					<Button>
						<Link to="/" className="nav-link">
							Home
						</Link>
						</Button>
					</li>
					<li>
						<Button> 
						<Link to="/" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
						</Button>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (

			<div className="main">
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
					<Button>
						<Link to="/" className="nav-link">
							Home
						</Link>
						</Button>
					</li>
					<li className="nav-item">
					<Button>
						<Link to="/login" className="nav-link">
							Login
						</Link>
						</Button>
					</li>
					<li className="nav-item">
					<Button>
						<Link to="/signup" className="nav-link">
							Sign Up
						</Link>
						</Button>
					</li>
				</ul>
			</nav>
			</div>
		)
	}
	}

class Nav extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}


	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
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

	render() {
		return (
			
			<div>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={}} /> */}
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
						/>}
				/>

				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/api/submissions" component={Submissions} />



				
			</div>
		
			
		)
	}
}

  

export default Nav
