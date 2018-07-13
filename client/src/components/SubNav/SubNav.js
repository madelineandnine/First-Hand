//Libraries
import React, { Component } from 'react';

//Components
import { Button, Menu } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import SubmitModal from '../SubmitModal';
import './SubNav.css';


// Creates a sticky 'SubNav' component w/ links to submit to database and to logout of app
const SubNav = () => (
    <div className = "ui top fixed menu" id="navBar">
  <Menu>
    <Menu.Item className="navButton">
      <Button href='/' primary>Logout</Button>
    </Menu.Item>

    <Menu.Item className="submitButton">
          <SubmitModal />
       
    </Menu.Item>
  </Menu>
  </div>
)

// Exports SubNav component
export default SubNav
