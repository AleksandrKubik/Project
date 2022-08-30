import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Profile/FriendsList/Friends"


const setActive = ({isActive}) => isActive ? s.active : '';

const Navbar = (props) => {
    let friendsElement = props.friendsData
        .map( f => <Friends firstName={f.firstName} lastName={f.lastName} avatar={f.avatar}/>)

    return <nav className={s.nav}>
        <div className={`${s.item}`}>
            <NavLink
                to="/profile"
                className={setActive}>
                Profile
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink
                to="/dialogs"
                className={setActive}>
                Messages
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink
                to="/music"
                className={setActive}>
                Music
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink
                to="/news"
                className={setActive}>
                News
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink
                to="/setting"
                className={setActive}>
                Setting
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink
                to="/friends"
                className={setActive}>
                Friends
            </NavLink>
            <div className={s.friendsBlock}>
            {friendsElement}
            </div>
        </div>
    </nav>
}

export default Navbar; 