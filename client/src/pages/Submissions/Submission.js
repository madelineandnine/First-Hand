import React, { Component } from "react";
import API from "../../utils/API"; 
import { Container } from "../../components/Grid";
import { List } from "../../components/List/List";
import { ListItem } from "../../components/List/ListItem"



export default class Submissions extends Component {
  constructor (props) {
    super(props);
    this.state = {
      submission: [],
      topic: "",
      language: "",
      date: "",
    }
  }
/* 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getSubmissions = () => {
    API.getSubmissions({
      topic: this.state.topic,
      language: this.state.language,
      date: this.state.date
    })
      .then(res =>
        this.setState({
          submission: res.data
        })
      )
      .catch(err => console.log(err));
  };

 
  };
 */




  componentDidMount() {
    // this.getSubmissions();
    API.getSubmissions()
      .then(res => {
        console.log(res.data);
        const submission = res.data;
        this.setState({ submission })
        console.log({ submission })
      });
  } 
  



      
  
render() {
return (
  <Container fluid>
  <List>
  {this.state.submission.map(submission => (
            <ListItem key={submission._id}
            _id={submission._id}>
              A Story About: {submission.topic}
              {submission.language} 
              date={submission.date}
              handleClick={this.handleArticleSave}
            </ListItem>
          ))}
  </List>
  </Container>
 /*  return <SubmissionCard title="Results">
      {this.state.submission.length ? (
        <List>
          {this.state.submission.map(submission => (
            <ListItem
              key={submission._id}
              _id={submission._id}
              title={submission.topic}
              language={submission.language}
              date={submission.date}
              handleClick={this.handleArticleSave}
              buttonText="Save Article"
            />
          ))}
        </List>
      ) : (
        <h2 className="text-center"></h2>
      )}
    </SubmissionCard> */

    )  
};
}; 


