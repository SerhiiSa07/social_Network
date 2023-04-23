import React from "react";
import s from './Messages.module.css'
import mes
    from "S:/it-kamasutra/23-04-23-first_project/samurai-way-main/src/components/Dialogs/Message/img-message_2.png"

const Message = (props) => {

    return (
        <div className={s.message}>
            <div>
                {props.message}
            </div>
            <div className={s.messageImage2}>
                <img src={mes} alt=""/>
                {props.message}
            </div>
        </div>)
}

export default Message;