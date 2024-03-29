import React from 'react';
import s from './Header.module.css';
import emblema from "../Header/pngwing.com.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.header}>
        <img
            src={emblema}
            alt=""
        />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>)
};

export default Header;