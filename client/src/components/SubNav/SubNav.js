import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import SubmitModal from '../SubmitModal'
import InvolveModal from '../InvolveModal'
import SearchStandard from '../Search'



const SubNav = () => (
    <div className = "ui top fixed menu">
  <Menu>
    <Menu.Item>
      <Button href='/' primary>Logout</Button>
    </Menu.Item>

    <Menu.Item>
          <SubmitModal />
    </Menu.Item>
    <Menu.Item>
      <InvolveModal />
    </Menu.Item>
    <Menu.Item>
      <SearchStandard />
    </Menu.Item>

  </Menu>
  </div>
)

export default SubNav
