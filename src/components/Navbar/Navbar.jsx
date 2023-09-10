import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";


const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <ul className={s.style}>
                    <li className={s.item}>
                        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default Navbar;