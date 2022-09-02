import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import MessageContainer from "./Message/MessageContainer";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsPage.dialogsData.map(d => < DialogItem key={d.id} name={d.name} id={d.id}/>)
//мапинг массива данных диалогов

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            < MessageContainer state = {props.state}
                               messages = {props.state.dialogsPage}
                               store = {props.store} />
        </div>
    )
}

export default Dialogs;