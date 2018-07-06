
<<<<<<< HEAD
import React from 'react'
import Route, Router, Switch from 'react-router-dom'
import HomepageLayout from './components/Home'
import { LoginForm }  from './components/Login/LoginForm'
import { SignupForm }  from './components/Signup/SignupForm'
=======
import React, { Component } from 'react'
import Nav from './components/Nav'
>>>>>>> ef6e2a7d50549d6c121adb7e4cb3b3d126c88e60
import Submissions from './pages/Submissions'

const App  = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={HomepageLayout} /> 
<<<<<<< HEAD
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignupForm} />
=======
>>>>>>> ef6e2a7d50549d6c121adb7e4cb3b3d126c88e60
      <Route exact path="/api/submissions" component={Submissions} />
    </Switch>
  </div>
  </Router>
)

export default App 
