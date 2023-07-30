
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, message: 'Serg', likesCount: '0'},
                    {id: 2, message: 'Lex', likesCount: '23'}
                ],
                newPostText:
                    "You are Welcome Serhii !!!"
            },
        dialogPage:
            {
                dialogs: [
                    {id: 1, name: 'Serg'},
                    {id: 2, name: 'Lex'},
                    {id: 3, name: 'Maks'},
                    {id: 4, name: 'Mark'},
                    {id: 5, name: 'Lena'}
                ],
                messages: [
                    {id: 1, message: 'Hello'},
                    {id: 2, message: 'How are you?'},
                    {id: 3, message: 'I am perfectly'},
                    {id: 4, message: 'Yes'},
                    {id: 5, message: 'Yes'}
                ],
                newMessageBody: ""
            },
        sidebar:
            {
                firstName: [
                    {id: 1, name: 'Friends'}
                ],
                friends: [
                    {id: 2, name: 'Dem'},
                    {id: 3, name: 'Flop'},
                    {id: 4, name: 'Fes'}
                ],
             },
    },
    _callSubscribe () {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscribe = observer;
    },

    /*addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state);
    },*/

    dispatch (action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 6, message: body});
            this._callSubscribe(this._state);
        }
    }
}

export const addPostActionCreation = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.state = store;

//store - OOP

