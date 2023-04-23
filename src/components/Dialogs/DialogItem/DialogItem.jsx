import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import mes2 from "S:/it-kamasutra/23-04-23-first_project/samurai-way-main/src/components/Dialogs/imgtem.png"
const DialogItem = (props) => {

    let path = '/dialogs' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <div className={s.dialogsImage1}>
                <img src={mes2} alt=""/>
            </div>
        </div>

    )
}
export default DialogItem;