import React from 'react';
import f from './Friends.module.css';
import {NavLink} from "react-router-dom";

function Friends(props) {
    return (
            <div className={f.friends}>
                <div><img src={props.avatar} alt=""/></div>
                <div>
                    <div>{props.firstName}</div>
                    <div>{props.lastName}</div>

                </div>

            </div>
    )
}

export default Friends;