import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Modal,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Nav from './components/Nav'
import LoginModal from './components/Login/LoginModal'
import LoginForm from './components/Login/LoginForm'
import HomepageLayout from './components/Home'
import Submissions from './pages/Submissions'

const App  = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={HomepageLayout} /> 
      <Route exact path="/api/submissions" component={Submissions} />
    </Switch>
  </div>
  </Router>
)

export default App 
