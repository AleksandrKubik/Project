import React from 'react';
import s from './Message.module.css';
import {sendNewMessageActionCreator, upMessageActionCreator} from "../../../redux/dialogs-reducer";
import Message from "./Message";

function MessageContainer(props) {

    let onSendMessageClick = () => {
        props.store.dispatch(sendNewMessageActionCreator());
    }
    let onNewMessageChange = (body) => {
        let action = upMessageActionCreator(body);
        props.store.dispatch(action);
    }

    return (
        < Message onSendMessageClick = {onSendMessageClick}
                  onNewMessageChange = {onNewMessageChange}
                    messages = {props.messages}/>
    )
}

export default MessageContainer;