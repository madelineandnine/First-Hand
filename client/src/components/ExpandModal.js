import _ from 'lodash'
import React, {Component} from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share'
import { FacebookIcon, TwitterIcon, RedditIcon } from 'react-share'
import InvolveModal from './InvolveModal'


const StyledButton = styled.button`
  color: #013364;
  background: #ffffff;
  border: 2px solid white;
  box-shadow: 3px 5px;
  font-family: 'Contrail One';
  margin: 0 0.75em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;
  float: right;
`;

const StyledModalHeader = styled(Modal.Header)`
  font-family: 'Contrail One'; 
  font-weight: 700; 
  color: #013364;
`;

export default class ExpandModal extends Component {
  
    // Uses API to get data from database and fill empty array
    // componentDidMount() {
    //   API.getSubmissions().then(res => {
    //     console.log(res.data);
    //     const submission = res.data;
    //     this.setState({ submission });
    //     console.log({ submission });
    //   });
    // }
  
  
  
    // Renders database as list on page with social media share buttons
    render() {
        const { submission } = this.props;
      return (
        <Modal className="scrolling" trigger={<StyledButton>Get More Here</StyledButton>}>
    <Modal.Header >{submission.topic}</Modal.Header>
    <Modal.Content>

      <Modal.Description>
        <Header>
            {submission.pullquote}
        </Header>
        
        <div className="description-content">
            {submission.language}
        </div>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
    <InvolveModal />
    <div className="inlineButtons">
    

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
    
    </div>
    </Modal.Actions>
  </Modal>
      );
    }
  }
  

