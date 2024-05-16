import React from "react";
import s from "./ProfileInfo.module.css";
import imageS from "S:/it-kamasutra/23-04-23-first_project/samurai-way-main/src/components/Profile/ProfileInfo/IMG_20221208_162603-min-round.png";
import Preloader from "components/common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWitchHooks from "components/Profile/ProfileInfo/ProfileStatusWitchHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.profileBlock}>
      <div className={s.imageBlockHeader}>
        <img src="https://live.staticflickr.com/8653/16474024798_f01d7d22f8_b.jpg" alt="" />
      </div>
      <div className={s.imageBlock}>
        <img src={imageS} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatusWitchHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
