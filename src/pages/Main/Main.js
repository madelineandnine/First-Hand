import React, { Component } from "react";
import Card from "../../components/Card";
import API from "../../utils/API"; 


class Submissions extends Component {
  state = {
    submission: []
  }; 
  componentDidMount() {
    this.getSubmissions();
  }

  getSubmissions = () => 
    API.getSubmissions()
      .then(res => this.setState({ submission: res.data}))
      .catch(err => console.log(err))


render() {
  return (
    <Card />
  )
}
}; 


export default Submissions;