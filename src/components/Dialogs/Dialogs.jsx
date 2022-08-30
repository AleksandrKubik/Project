import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsElement = state.dialogsData.map(d => < DialogItem key={d.id} name={d.name} id={d.id}/>)
//мапинг массива данных диалогов

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            < Message messages={props.dialogs.messagesData} newMessageBody={props.dialogs.newMessageBody}
                      dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialogs;