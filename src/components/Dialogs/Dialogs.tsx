import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "components/Dialogs/DialogItem/DialogItem";
import Message from "components/Dialogs/Message/Messages";
import { Redirect } from "react-router-dom";
import store from "redux/store";

type DialogsType = {
  id: number;
  name: string;
};

const Dialogs = (props) => {
  let state = store._state.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = state.messages.map((m) => <Message message={m.message} />);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
      <div className={s.onMessageTextarea}>
        <div>
          <textarea onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
