import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";


const Friend = (props) => {

    let dialogsElements = props.state.friends.map(f => <Friend name={f.name} id={f.id}/>);
    let path = '/friends' + props.id;

    return (
        <div>
            <div>
                <div className={s.friendsTitle}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
            </div>
            <div className={s.nameTitle}>
                {dialogsElements}
            </div>
        </div>
    )
};
export default Friend;