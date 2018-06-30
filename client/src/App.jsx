import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Nav from './components/Nav'
import HomepageLayout from './components/Home'
import Submissions from './pages/Submissions'

const App  = () => (
  <div>
    <Nav />
    <HomepageLayout /> 
    <Submissions />
      
  </div>
)

export default App 
