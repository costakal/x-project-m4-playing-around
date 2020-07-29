import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { users } from "../data/users";

const Profile = () => {
  const { userId } = useParams();

  const userProfile = users.find((user) => {
    if (userId === user._id) {
      return user;
    }
  });

  const userFriends = userProfile.friends.map((friend) => {
    return users.find((user) => user._id === friend);
  });

  return (
    <>
      <h2>{userProfile.name}</h2>
      <ProfilePhoto src={userProfile.avatarUrl} />
      <h3>{`${userProfile.name}'s Friends`}</h3>
      <ul>
        {userFriends.map((friend) => {
          return (
            <li>
              <img src={friend.avatarUrl} />
              <p>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Profile;

const ProfilePhoto = styled.img`
  height: 250px;
`;
