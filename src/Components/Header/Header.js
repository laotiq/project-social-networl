import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={s.header}>
            <div><img
                src='https://images.boosty.to/image/6016c718-ef41-49cb-9ed4-7c32af07e3e6?change_time=1638275245&croped=1&mh=625&mw=575'/>
            </div>
            <div className={s.headerInfo}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='message'>Message</NavLink>
            </div>
        </div>
    )
}

export default Header