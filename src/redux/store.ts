import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: StateType
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number

}

export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type DialogsType = {
    id: number
    name: string
}

export type SidebarType = {
    firstName: Array<FirstNameType>
    friends: FriendsType[]
}

export type MessagesType = {
    id: number
    message: string
}

export type FirstNameType = {
    id: number
    name: string
}

export type FriendsType = {
    id: number
    name: string
}

let store = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, message: 'Serg', likesCount: 10},
                    {id: 2, message: 'Lex', likesCount: 23}
                ],
                newPostText:
                    "You are Welcome Serhii !!!",

                profile: null
            },
        dialogsPage:
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
                newNameFriends: ''
             },
    },

    _callSubscribe (_state: any) {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },

    subscribe (observer: any) {
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

    dispatch (action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscribe(this._state);
    }
}

export default store;

// @ts-ignore
window.state = store;

//store - OOP

