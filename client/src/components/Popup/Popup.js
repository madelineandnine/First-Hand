import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const SubmissionPopup = props => (
  <Popup trigger={<Button icon="add" />} postion='bottom center' on='click'/>
);

export default SubmissionPopup;
