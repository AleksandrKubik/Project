import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? s.active : '';

function DialogItem(props){
    let path = "/dialogs/" + props.id;
    let name = props.name;

    return (
        <div className={s.dialog}>
            <NavLink
                to={path}
                className={setActive}>
                {name}
            </NavLink>
        </div>
    )
}



export default DialogItem;