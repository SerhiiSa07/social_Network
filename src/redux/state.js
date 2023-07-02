
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
            },
        /*sidebar:
            {
            friend: [
                {id: 1, name: 'Friends'},
                ],
            friends: [
                {id: 1, name: 'Dem'},
                {id: 2, name: 'Flop'},
                {id: 3, name: 'Fes'}
            ],
        },*/

    },
    getState(){
        return this._state;
    },
    _callSubscribe () {
    console.log('State changed');
    },
    addPost () {
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
    },
    subscribe (observer) {
        this._callSubscribe = observer;
    }
}





export default store
window.state = store;

//store - OOP




