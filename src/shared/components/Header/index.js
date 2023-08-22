import React from "react";
import { Link } from "react-router-dom";
import { Brand, GeneralHeader, List } from "./HeaderStyled";

const Header = () => {
  return (
    <GeneralHeader>
      <Brand>
        <Link to="/"> Color react-app</Link>
      </Brand>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </List>
      </nav>
    </GeneralHeader>
  );
};

export default Header;
