import React, { Component } from 'react'
import { Button, Modal, Form, TextArea, Header, Image, List } from 'semantic-ui-react'
import LoginForm from '../components/Login/LoginForm'
import API from "../utils/API"; 
import axios from 'axios'
import styled from 'styled-components'

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

const InvolveModal = () => {
    const sizes = [ 'massive']

    return (
    <Modal className="scrolling" trigger={<StyledButton>Get Involved</StyledButton>} closeIcon>
      <Header icon='archive' content='Get Involved' />
      <Modal.Content>
      <List divided animated size={'massive'} verticalAlign='middle'>
      <List.Item >
      <List.Content floated='right'>
        <StyledButton href="https://www.vote.org/register-to-vote/">Sign Up Today</StyledButton>
      </List.Content>
      <List.Content icon name="edit">Register to Vote</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <StyledButton href='https://www.vote.org/election-reminders/'>Mark your Calendar</StyledButton>
      </List.Content>
      <List.Content>Find your Next Election</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <StyledButton href='https://www.vote.org/am-i-registered-to-vote/'>Verify Your Registration</StyledButton>
      </List.Content>
      <List.Content >Wait, Am I Registered?</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <StyledButton href="https://www.vote.org/absentee-ballot/">Absentee Vote</StyledButton>
      </List.Content>
      <List.Content>Vacation is No Excuse</List.Content>
    </List.Item>
  </List>
      </Modal.Content>
    </Modal>
  )
}


  export default InvolveModal  