import React, { Component } from 'react'
import API from '../../utils/API';
import { Tab } from 'semantic-ui-react'


export default class TabMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          submission: [],
          topic: '',
          pullquote: '',
          language: '',
          date: '',
        };
      }
    
      // Uses API to get data from database and fill empty array
      componentDidMount() {
        API.getSubmissions().then(res => {
          console.log(res.data);
          const submission = res.data;
          this.setState({ submission });
          console.log({ submission });
        });
      }
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    panes = [
        { menuItem: 'Main', pane: 'Title/Topic' },
        { menuItem: 'Extra', pane: 'Full Story' },
      ]
      
  render() {
    const { activeItem } = this.state;
    const submission = [];
    return (
    <List>
          {this.state.submission.map(submission => (
            <ListItem
              key={submission._id}
              _id={submission._id}
              className="whiteText"
            >
              <h2 className="whiteText"> A Story About: {submission.topic} </h2>
              <h1>
                {' '}
                <strong> " </strong> {submission.pullquote} <strong> " </strong>
              </h1>
              <h4> Date Published: {submission.date} </h4>
       
            </ListItem>
          ))}
        </List>
        )
  }
  }
