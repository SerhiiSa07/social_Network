import React from "react";
import ProfileInfo from "components/Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "components/Profile/MyPosts/MyPostsContainer";

export type ProfilePropsType = {
  profile: ProfileType | null;
};
const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
