import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            newPostText: 'Kukumis',
            postsData: [
                {id: 2, message: "It's my first post", likesCount: 10},
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 3, message: 'Cool', likesCount: 8},
                {id: 4, message: 'Ku', likesCount: 12}
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [{
                id: 1,
                firstName: 'Oleg',
                lastName: 'Kukoyaka',
                avatar: 'https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'
            },
                {
                    id: 2,
                    firstName: 'Mira',
                    lastName: 'Solovej',
                    avatar: 'https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'
                },
                {
                    id: 3,
                    firstName: 'Mia',
                    lastName: 'Kuba',
                    avatar: 'https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'
                },
                {
                    id: 4,
                    firstName: 'Oleg',
                    lastName: 'Pankov',
                    avatar: 'https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'
                },
                {
                    id: 5,
                    firstName: 'Marta',
                    lastName: 'Kukoyaka',
                    avatar: 'https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'
                }]
        }
    },
    _callSubscriber() {
        this.subscribe();
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //паттерн observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;