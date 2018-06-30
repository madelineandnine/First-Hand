import React from "react";
import "./card.css"; 
import { Card } from "semantic-ui-react";

const SubmissionCard = props => (
    <div className="ui card">
  <div className="content">
    <div className="header"> {props.topic} </div>
  </div>
  <div className="content">
    <div className="description"> {props.language} </div>
  </div>
  <div className="extra content"> {props.date} </div>
</div>
)

//

export default SubmissionCard;