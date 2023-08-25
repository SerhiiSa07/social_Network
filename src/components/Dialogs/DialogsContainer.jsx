import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Message from "./Message/Messages";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }

                    return (
                        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                 dialogPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;