import React from "react";
import "./card.css"; 

const Card = props => (
    <div class="ui card">
  <div class="content">
    <div class="header"> {props.title} </div>
  </div>
  <div class="content">
    <div class="description"> {props.language} </div>
  </div>
  <div class="extra content"> {props.date} </div>
</div>
)

//

export default Card;