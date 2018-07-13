import _ from 'lodash'
import React, {Component} from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'




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
        <Modal className="scrolling" trigger={<Button id="submissionButton">Get More Here</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='/images/wireframe/image.png' wrapped />

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
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
      );
    }
  }
  

