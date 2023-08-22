
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

 const dialogsReducer = (state = initialState, action) => {
     switch (action.type){
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;
         case SEND_MESSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messages.push({id: 6, message: body});
         default:
             return state;
     }
 }

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
