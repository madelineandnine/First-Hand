import React, { Component } from "react";
import SubmissionCard from '../../components/Card'
import API from "../../utils/API"; 
import { Container } from "../../components/Grid";


class Submissions extends Component {
  state = {
    submission: []
    

  }; 

  componentDidMount() {
    this.getSubmissions();
    console.log(this.Submissions)
  }

  getSubmissions = () => 
    API.getSubmissions()
      .then(res => this.setState({ submission: res.data}))
      .catch(err => console.log(err))


render() {
  return (
    <Container fluid>
    <SubmissionCard 
    
      topic={Submissions.topic}
      language={Submissions.language}
      
    />
    </Container>
  )
}
}; 


export default Submissions;