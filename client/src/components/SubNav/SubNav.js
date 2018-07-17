
//Components
import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import SubmitModal from '../SubmitModal'
import InvolveModal from '../InvolveModal'
import SearchStandard from '../Search'
import styled from 'styled-components';

const StyledMenu = styled.menu `
 &&&  {
  background-color: #d30b0d;
  display: flex;
  width: 100%;
  height: 100px;
  margin: 0px;
 }
`
const StyledButton = styled(Button)` 
&&& {
  color: white;
  background: #013364;
  border: 2px solid white;
  box-shadow: 3px 5px;
  font-family: 'Contrail One';
  margin: 0 0.75em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;
}
`;
/* 
const StyledSearchStandard = styled(div) `
&&& {
  postion: absolute;
  right: 0;
}
` */

// Creates a sticky 'SubNav' component w/ links to submit to database and to logout of app
 const SubNav = (props) => (
    <div className = "ui top fixed menu">
  <StyledMenu>
    <Menu.Item className="navButton">
      <StyledButton href='/'>Logout</StyledButton>
    </Menu.Item>

    <Menu.Item id="submit-button">
       
        <SubmitModal />
          
    </Menu.Item>
    <Menu.Item>
      <InvolveModal />
    </Menu.Item>
    <Menu.Item className="searchBar">
      <SearchStandard onResultSelect={props.onResultSelect} />
    </Menu.Item>
  </StyledMenu>
  </div>
)



export default SubNav;




