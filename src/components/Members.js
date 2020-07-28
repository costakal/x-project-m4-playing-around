import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { users } from "../data/users";

const Members = () => {
  return (
    <MembersSection>
      <MembersTitle>All FaceSpace Members</MembersTitle>
      {users.map((user) => {
        return (
          <Link to={`/profile/${user._id}`}>
            <MembersPhotos src={user.avatarUrl} alt={`user-img-${user.id}`} />
          </Link>
        );
      })}
    </MembersSection>
  );
};

export default Members;

const MembersSection = styled.div`
  margin: 20px 140px;
`;

const MembersTitle = styled.h2`
  color: #cc5500;
  font-size: 24px;
`;
const MembersPhotos = styled.img`
  margin: 5px;
  height: 150px;
`;
