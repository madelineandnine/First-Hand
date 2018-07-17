import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './signup.css';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message,
} from 'semantic-ui-react';
import styled from 'styled-components';

const BlueSegment = styled(Segment)`
  background-color: #013364 !important;
  border-radius: 0 !important;
  color: white !important;
`;

const StyledHeader = styled(Header)`
  color: #013364 !important;
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
  background: #013364;
  border: 2px solid white;
  box-shadow: 3px 5px;
  font-family: 'Contrail One';
  margin: 0 0.75em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;
`;

const StyledMessage = styled(Message)`
  color: #013364 !important;
  font-family: 'Contrail One' !important;
  border: 2px solid !important;
  margin: 0px !important;
`;

const StyledLabel = styled.label`
  font-family: 'Contrail One' !important;
  font-size: 16px !important;
  text-transform: uppercase !important;
  color: white !important;
  background: none !important;
  margin-bottom: 0 !important;
`;

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      zipcode: '',
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // TODO - validate!
    axios
      .post('/auth/signup', {
        username: this.state.username,
        password: this.state.password,
        zipcode: this.state.zipcode,
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log('youre good');
          this.setState({
            redirectTo: '/api/submissions',
          });
        } else {
          console.log('duplicate');
        }
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <div className="login-form">
        <Grid textAlign="center" style={{ height: '100%' }}>
          <Grid.Column style={{ maxWidth: 450, marginTop: 50 }}>
            <StyledHeader as="h2" textAlign="center">
              CREATE AN ACCOUNT
            </StyledHeader>
            <StyledForm size="large">
              <BlueSegment>
                <Form.Field>
                  <StyledLabel>
                    <label htmlFor="username" color="white">
                      Username{' '}
                    </label>
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
                    <label htmlFor="zipcode">Zipcode </label>
                  </StyledLabel>
                  <input
                    type="number"
                    name="zipcode"
                    value={this.state.zipcode}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <StyledLabel>
                    <label htmlFor="password">Password </label>
                  </StyledLabel>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <StyledLabel>
                    <label htmlFor="confirmPassword">Confirm Password </label>
                  </StyledLabel>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <StyledButton
                  style={{ margin: '10px' }}
                  onClick={this.handleSubmit}
                >
                  Sign up
                </StyledButton>
              </BlueSegment>
            </StyledForm>
            <StyledMessage>
              Already have an account? <a href="/login">Login</a>
            </StyledMessage>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignupForm;
