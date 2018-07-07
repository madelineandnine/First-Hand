import React from "react";
import './List.css';

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

