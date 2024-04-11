import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "components/Dialogs/DialogItem/DialogItem";
import Message from "components/Dialogs/Message/Messages";
import { Redirect } from "react-router-dom";
import store from "redux/store";
import { Field, reduxForm } from "redux-form";

type DialogsType = {
  id: number;
  name: string;
};

const Dialogs = (props) => {
  let state = store._state.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = state.messages.map((m) => <Message message={m.message} />);

  let newMessageBody = state.newMessageBody;

  let addNewMessage = (value) => {
    alert(value.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialogsItems}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      {/*<div className={s.onMessageTextarea}>
        <div>
          <textarea onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>*/}
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Enter you message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
