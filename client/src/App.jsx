// Libraries
import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'

// Components
import LoginForm  from './components/Login/LoginForm'
import SignupForm  from './components/Signup/SignupForm'
import Submissions from './pages/Submissions'
import HomepageLayout from './components/Home'


const App  = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={HomepageLayout} /> 
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/signup" component={SignupForm} />
      <Route exact path="/api/submissions" component={Submissions} />
    </Switch>
  </div>
  </Router>
)

export default App 
