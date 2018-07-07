import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import SubmitModal from '../SubmitModal'



const SubNav = () => (
    <div className = "ui top fixed menu">
  <Menu>
    <Menu.Item>
      <Button href='/' primary>Logout</Button>
    </Menu.Item>

    <Menu.Item>
          <SubmitModal />
       
    </Menu.Item>
  </Menu>
  </div>
)

export default SubNav
