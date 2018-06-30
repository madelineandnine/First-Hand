import React from "react";
import "./card.css"; 
import { Card } from "semantic-ui-react";

const SubmissionCard = props => (
    <div class="ui card">
  <div class="content">
    <div class="header"> {props.topic} </div>
  </div>
  <div class="content">
    <div class="description"> {props.language} </div>
  </div>
  <div class="extra content"> {props.date} </div>
</div>
)

//

export default SubmissionCard;