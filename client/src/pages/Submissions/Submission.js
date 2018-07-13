
// Libraries
import React, { Component } from 'react';
import API from '../../utils/API';

// Components
import { Container } from '../../components/Grid';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
//import { Button } from 'semantic-ui-react';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share';
import { FacebookIcon, TwitterIcon, RedditIcon } from 'react-share';
import SubNav from '../../components/SubNav';
import SubmissionPopup from '../../components/Popup'
//import TabMenu from '../../components/TabMenu/TabMenu.js';

// Creates/exports 'Submissions' as stateful component with empty array
export default class Submissions extends Component {
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



  // Renders database as list on page with social media share buttons
  render() {
    return (
      <Container fluid>
        <SubNav />
        <List>
          {this.state.submission.map(submission => (
            <ListItem
              key={submission._id}
              _id={submission._id}
            >
              <h2 className="whiteText"> A Story About: {submission.topic} </h2>
              <h1>
                {' '}
                <strong> " </strong> {submission.pullquote} <strong> " </strong>
              </h1>
              <h4> Date Published: {submission.date} </h4>
              <div className="inlineButtons">
                <SubmissionPopup id="popup-text" content={submission.language}>
                <div>The rest of my story:</div>
                </SubmissionPopup>
                <FacebookShareButton
                  className="shareButtons"
                  url="www.facebook.com"
                  quote={submission.topic}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton
                  className="shareButtons"
                  url="www.facebook.com"
                  quote={submission.topic}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <RedditShareButton
                  className="shareButtons"
                  url="www.facebook.com"
                  quote={submission.topic}
                >
                  <RedditIcon size={32} round={true} />
                </RedditShareButton>
          {/*       <Button>
                  <button id="storyButton">Get More Here</button>
                    </Button> */}
              </div>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}
