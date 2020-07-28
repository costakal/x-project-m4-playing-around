import React from "react";
import styled from "styled-components";

import { users } from "../data/users";

const Members = () => {
  return (
    <>
      <MembersTitle>All FaceSpace Members</MembersTitle>
      <ul>
        {users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Members;

const MembersTitle = styled.h2`
  color: #cc5500;
`;
