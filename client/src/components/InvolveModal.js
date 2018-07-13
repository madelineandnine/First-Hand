import React, { Component } from 'react'
import { Button, Modal, Form, TextArea, Header, Image, List } from 'semantic-ui-react'
import LoginForm from '../components/Login/LoginForm'
import API from "../utils/API"; 
import axios from 'axios'

  
const InvolveModal = () => {
    const sizes = [ 'massive']

    return (
    <Modal className="scrolling" trigger={<Button>Get Involved</Button>} closeIcon>
      <Header icon='archive' content='Get Involved' />
      <Modal.Content>
      <List divided animated size={'massive'} verticalAlign='middle'>
      <List.Item >
      <List.Content floated='right'>
        <Button href="https://www.vote.org/register-to-vote/">Sign Up Today</Button>
      </List.Content>
      <List.Content icon name="edit">Register to Vote</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button href='https://www.vote.org/election-reminders/'>Mark your Calendar</Button>
      </List.Content>
      <List.Content>Find your Next Election</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button href='https://www.vote.org/am-i-registered-to-vote/'>Verify Your Registration</Button>
      </List.Content>
      <List.Content >Wait, Am I Registered?</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button href="https://www.vote.org/absentee-ballot/">Absentee Vote</Button>
      </List.Content>
      <List.Content>Vacation is No Excuse</List.Content>
    </List.Item>
  </List>
      </Modal.Content>
    </Modal>
  )
}


  export default InvolveModal  