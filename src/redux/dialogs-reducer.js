const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Sveta'}
    ],
    newMessageBody: " ",
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Ola'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'Ku'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let sendNewMessage = {
                id: 7,
                message: state.newMessageBody
            };
            state.messagesData.push(sendNewMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = () =>
    ({type: SEND_NEW_MESSAGE})
export const upMessageActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;