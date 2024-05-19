import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "components/common/FormControls/FormsControls";
import s from "components/Profile/ProfileInfo/ProfileInfo.module.css";
import style from "components/common/FormControls/FormControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lolkingForAJob ? "yes" : "no"}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      {profile.lolkingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.loolkingForAJobDescription}
          {createField("My professional skills", "loolkingForAJobDescription", [], Textarea)}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
        {createField("", "loolkingForAJobDescription", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);

export default ProfileDataFormReduxForm;
