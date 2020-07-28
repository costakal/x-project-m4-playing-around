import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = () => {
  return (
    <NavBar>
      <Link to={"/"}>
        <h1>FaceSpace</h1>
      </Link>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.header`
  margin-bottom: 10px;
  height: 60px;
  width: 100vw;
  color: white;
  background: #cc5500;
  h1 {
    padding: 0px 15px;
    font-size: 30px;
    line-height: 60px;
  }
`;
