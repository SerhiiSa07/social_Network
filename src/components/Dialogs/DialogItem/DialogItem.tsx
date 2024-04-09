import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import mes2 from "S:/it-kamasutra/23-04-23-first_project/samurai-way-main/src/components/Dialogs/imgtem.png"
const DialogItem = (props) => {

    let path = '/dialogs' + props.id;

    let newDialogItemElement = React.createRef();
    let addDialogItem = () => {
        let text = newDialogItemElement.current.value;
        alert(text)
    };

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <div className={s.dialogsImage1}>
                <img src={mes2} alt=""/>
                <div>
                    <div className={s.textarea}>
                        <textarea ref={newDialogItemElement}></textarea>
                    </div>
                    <div className={s.button}>
                        <button onClick={addDialogItem}>Enter</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DialogItem;