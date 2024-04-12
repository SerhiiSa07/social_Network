import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "components/common/FormControls/FormsControls";
import { required } from "utils/validators/validators";

export const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required]} placeholder="Enter you message" name="newMessageBody" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);
