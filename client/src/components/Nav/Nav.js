import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import './Nav.css';
import LoginForm from '../Login/LoginForm';
import LoginModal from '../Login/LoginModal';
import SignupForm from '../Signup/SignupForm';
import SignupModal from '../Signup/SignupModal';
//import Header from './components/Header'
import Home from '../Home';
import Submissions from '../../pages/Submissions';
import { Button, Header, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background: #2185d0;
  border: 2px solid white;
  box-shadow: 3px 5px;
  font-family: 'Contrail One';
  margin: 0 0.75em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;
`;

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <StyledButton>
              <Link to="/" className="navLink">
                Home
              </Link>
            </StyledButton>
          </li>
          <li>
            <StyledButton>
              <Link to="/" className="navLink" onClick={props._logout}>
                Logout
              </Link>
            </StyledButton>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <div className="main">
        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <StyledButton>
                <Link to="/" className="navLink">
                  Home
                </Link>
              </StyledButton>
            </li>
            <li className="nav-item">
              <StyledButton>
                <Link to="/login" className="navLink">
                  Login
                </Link>
              </StyledButton>
            </li>
            <li className="nav-item">
              <StyledButton>
                <Link to="/signup" className="navLink">
                  Sign Up
                </Link>
              </StyledButton>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        console.log('THERE IS A USER');
        this.setState({
          loggedIn: true,
          user: response.data.user,
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null,
        });
      }
    });
  }

  _logout(event) {
    event.preventDefault();
    console.log('logging out');
    axios.post('/auth/logout').then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
        });
      }
    });
  }

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password,
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user,
          });
        }
      });
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
          render={() => <LoginForm _login={this._login} />}
        />

        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/api/submissions" component={Submissions} />
      </div>
    );
  }
}

export default Nav;
