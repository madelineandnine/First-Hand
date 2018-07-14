import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Icon,
  Modal,
  Message,
  Segment,
  Label,
} from 'semantic-ui-react';
import axios from 'axios';
import Nav from '../Nav';
import styled from 'styled-components';

const RedSegment = styled(Segment)`
  background-color: #d30b0d !important;
  border-radius: 0 !important;
  border: 0 !important;
  box-shadow: none !important;
  color: white !important;
`;

const StyledHeader = styled(Header)`
  color: #d30b0d !important;
  font-family: 'Contrail One' !important;
  border: 2px solid !important;
  padding: 15px 0 !important;
  margin: 0px !important;
`;

const StyledForm = styled(Form)`
  font-family: 'Contrail One' !important;
  font-size: 18px !important;
  border-radius: 0 !important;
`;

const StyledButton = styled.button`
  color: white;
  background: #d30b0d;
  border: 2px solid white;
  box-shadow: 3px 5px;
  font-family: 'Contrail One';
  margin: 0 0.75em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;
`;

const StyledMessage = styled(Message)`
  color: #d30b0d !important;
  font-family: 'Contrail One' !important;
  border: 2px solid !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  margin: 0px !important;
`;

const StyledLabel = styled(Label)`
  font-family: 'Contrail One' !important;
  font-size: 16px !important;
  text-transform: uppercase !important;
  color: white !important;
  background: none !important;
  margin-bottom: 0 !important;
`;

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirectTo: null,
    };
    // this.googleSignin = this.googleSignin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
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

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    this._login(this.state.username, this.state.password);
    console.log(this.state.username);
    this.setState({
      redirectTo: '/api/submissions',
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="login-form">
          <Grid textAlign="center" style={{ height: '100%' }}>
            <Grid.Column style={{ maxWidth: 450, marginTop: 50 }}>
              <StyledHeader as="h2" textAlign="center">
                LOGIN TO YOUR ACCOUNT
              </StyledHeader>
              <StyledForm size="large">
                <RedSegment stacked>
                  <Form.Field>
                    <StyledLabel>
                      <label htmlFor="username">Username </label>
                    </StyledLabel>
                    <input
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <StyledLabel>
                      <label htmlFor="password">
                        Password{' '}
                      </label>
                    </StyledLabel>
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <StyledButton
                    style={{ margin: '10px' }}
                    onClick={this.handleSubmit}
                  >
                    Login
                  </StyledButton>
                </RedSegment>
              </StyledForm>
              <StyledMessage>
                New to us? <a href="/signup">Sign Up</a>
              </StyledMessage>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}

export default LoginForm;
