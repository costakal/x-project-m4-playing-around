import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = () => {
  return (
    <NavBar>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <h1>FaceSpace</h1>
      </Link>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.header`
  display: flex;
  margin-bottom: 10px;
  height: 60px;
  width: 100vw;
  background: #cc5500;
  h1 {
    color: white;
    padding: 0px 15px;
    font-size: 30px;
    line-height: 60px;
    &:hover {
      color: lightgrey;
    }
  }
`;
