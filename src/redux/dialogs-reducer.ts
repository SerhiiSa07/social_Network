const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Serg" },
    { id: 2, name: "Lex" },
    { id: 3, name: "Maks" },
    { id: 4, name: "Mark" },
    { id: 5, name: "Lena" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am perfectly" },
    { id: 4, message: "Yes" },
    { id: 5, message: "Yes" },
  ],
};

const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
