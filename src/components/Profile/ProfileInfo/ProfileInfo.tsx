import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "components/common/Preloader/Preloader";
import userPhoto from "../../../assets/images/lev.jpg";
import ProfileStatusWitchHooks from "components/Profile/ProfileInfo/ProfileStatusWitchHooks";
import ProfileDataForm from "components/Profile/ProfileInfo/ProfileDataForm";
import { createField, Input } from "components/common/FormControls/FormsControls";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwer={isOwner}
          />
        )}
        <ProfileStatusWitchHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwer, goToEditMode }) => {
  return (
    <div>
      {isOwer && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lolkingForAJob ? "yes" : "no"}
      </div>
      {profile.lolkingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lolkingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={s.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/*const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};*/

export default ProfileInfo;
