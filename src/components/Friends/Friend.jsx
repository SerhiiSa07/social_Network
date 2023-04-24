import {NavLink} from "react-router-dom";
import l from "./Friend.module.css";
import React from "react";


/*
const Friends = (props) => {
    let friendsElements = props.state.friends.map(f => <Friends id={f.id} name={f.name}/>);
    let path = '/friends' + props.id;

    return (
        <div>
            <div>
                <NavLink to={path}>{props.name}</NavLink>
                <NavLink to='/friends' activeClassName={l.active}>Friends</NavLink>
            </div>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}
*/



const Friends = () => {
    return (

        <div>
            <div className={l.titlesName}>
                Friends
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

export default Friends