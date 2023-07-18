import {NavLink} from "react-router-dom";
import l from "./Friend.module.css";
import React from "react";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "../Dialogs/Message/Messages";

/*let friendElements = props.state.friend.map(d => <Friends name={d.name} id={d.id}/>);
let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);*/
/*

const Friends = () => {
    return (

        <div>
            <div className={l.titlesName}>
                {friendElements}
            </div>
            <div className={l.circle}>
                <div className={l.circle1}></div>
                <div className={l.circle2}></div>
                <div className={l.circle3}></div>
            </div>
            <div className={l.titleName}>
                <div className={l.titleName1}>Dem</div>
                <div className={l.titleName2}>Flop</div>
                <div className={l.titleName3}>Fes</div>
            </div>
        </div>
)
}

*/



const Friends = (props) => {

    let friendElements = props.friend;

    return (

        <div>
            <div className={l.titlesName}>
                {friendElements} {/*Friends*/}
            </div>
            <div className={l.circle}>
                <div className={l.circle1}></div>
                <div className={l.circle2}></div>
                <div className={l.circle3}></div>
            </div>
            <div className={l.titleName}>
                <div className={l.titleName1}>{/*Dem*/}</div>
                <div className={l.titleName2}>Flop</div>
                <div className={l.titleName3}>Fes</div>
            </div>
        </div>
)
}

export default Friends