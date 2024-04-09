import React from "react";
import ProfileInfo from "components/Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "components/Profile/MyPosts/MyPostsContainer";

export type ProfilePropsType = {
  profile: ProfileType | null;
};
const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
