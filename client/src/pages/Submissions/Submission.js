import React, { Component } from "react";
import SubmissionCard from '../../components/Card'
import API from "../../utils/API"; 
import { Container } from "../../components/Grid";


class Submissions extends Component {
  state = {
<<<<<<< HEAD
    submission: []
    

=======
    submission: [],
    topic: "",
    language: "",
    date: "",
>>>>>>> master
  }; 

  componentDidMount() {
<<<<<<< HEAD
    this.getSubmissions();
    console.log(this.Submissions)
  }

  getSubmissions = () => 
=======
    // this.getSubmissions();
>>>>>>> master
    API.getSubmissions()
      .then(res => {
        console.log(res.data);
      })
      .then(res => this.setState({ submission: res.data }))
      .catch(err => console.log(err))
  }

  // getSubmissions = () => 
    



      
  
render() {
  return (
    <Container fluid>
    <SubmissionCard 
      topic={Submissions.topic}
      language={Submissions.language}
      
    />
    </Container>
  );
};
}; 


export default Submissions;