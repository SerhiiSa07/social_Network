import l from "./Friend.module.css";
import React from "react";


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

    console.log(props)

    let friendElements = props.store?.getState().sidebar.firstName[0].name;

    let friendsElements = props.store?.getState().sidebar.friends[0].name;

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
                <div className={l.titleName1}>{friendsElements}</div>
                <div className={l.titleName2}>{friendsElements}</div>
                <div className={l.titleName3}>{friendsElements}</div>
            </div>
        </div>
    )
}

export default Friends