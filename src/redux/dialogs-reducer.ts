const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Serg" },
    { id: 2, name: "Lex" },
    { id: 3, name: "Maks" },
    { id: 4, name: "Mark" },
    { id: 5, name: "Lena" },
  ] as Array<DialogType>,

  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am perfectly" },
    { id: 4, message: "Yes" },
    { id: 5, message: "Yes" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActiveType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActiveType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
