
import React, { Component } from 'react'
import Nav from './components/Nav'
import Submissions from './pages/Submissions'

const App  = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={HomepageLayout} /> 
      <Route exact path="/api/submissions" component={Submissions} />
    </Switch>
  </div>
  </Router>
)

export default App 
