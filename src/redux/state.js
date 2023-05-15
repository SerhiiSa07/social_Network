
let rerenderEntireThree = () => {

}



let state = {
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

}
window.state = state;
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export const subscribe = (observer) => {
    rerenderEntireThree = observer
}

export default state