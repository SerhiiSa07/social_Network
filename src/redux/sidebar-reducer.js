
const UPDATE_NEW_FIRST_NAME = 'UPDATE_NEW_FIRST_NAME';

const UPDATE_NEW_NAME_FRIENDS = 'UPDATE_NEW_NAME_FRIENDS';


let initialState = {

    firstName: [
        {id: 1, name: 'Friends'}
    ],

    friends: [
        {id: 2, name: 'Dem'},
        {id: 3, name: 'Flop'},
        {id: 4, name: 'Fes'}
    ],
    newNameFriends: ''
};

const sidebarReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type){
        case UPDATE_NEW_FIRST_NAME:
            stateCopy = { ...state,
                newMessageBody:
                action.body
            };

            return stateCopy;

        case UPDATE_NEW_NAME_FRIENDS:

            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const firstNameCreator = () => ({ type: UPDATE_NEW_FIRST_NAME });

export const updateNewNameFriendsCreator = (body) =>
    ({ type: UPDATE_NEW_NAME_FRIENDS, body: body });

export default sidebarReducer;
