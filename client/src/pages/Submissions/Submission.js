import React, { Component } from 'react';
import API from '../../utils/API';
import { Container } from '../../components/Grid';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export default class Submissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submission: [],
      topic: '',
      language: '',
      date: '',
    };
  }



  componentDidMount() {
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
            <ListItem key={submission._id} _id={submission._id}>
              <h1> A Story About: {submission.topic} </h1>
              <p> {submission.language} </p>
              <h4> Date Published: {submission.date} </h4>
              <Button>Share Me!</Button>
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
