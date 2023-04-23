import React from 'react';
import s from './Header.module.css';
import emblema from "../Header/pngwing.com.png"
const Header = () => {
    return (<header className={s.header}>
        <img
            src={emblema}
            alt=""
        />
    </header>)
};

export default Header;