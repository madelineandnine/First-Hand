import React from "react";
import ListItem from "../../components/List/ListItem"

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

