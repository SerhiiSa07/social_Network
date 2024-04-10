export type StoreType = {
  _state: RootStateType;
  _callSubscribe: (_state: any) => void;
  updateNewPostText: (newText: string) => void;
  addPost: (postText: string) => void;
  _onChange: () => void;
  _subscribe: (callback: () => void) => void;
  getState: () => RootStateType;
  dispatch: (action: ActionsTypes) => void;
};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export type ProfilePageType = {
  posts: PostsType[];
  newPostText: string;
  profile: null;
};

export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type DialogPageType = {
  dialogs: DialogsType[];
  messages: MessagesType[];
  newMessageBody: string;
};

type DialogsType = {
  id: number;
  name: string;
};

export type SidebarType = {
  firstName: Array<FirstNameType>;
  friends: FriendsType[];
  newNameFriends: string;
};

export type MessagesType = {
  id: number;
  message: string;
};

export type FirstNameType = {
  id: number;
  name: string;
};

export type FriendsType = {
  id: number;
  name: string;
};

type AddPostActionType = {
  type: "ADD-POST";
  postText: string;
};

type ChangeNewTextActionType = {
  type: "CHANGE-NEW-TEXT";
  newText: string;
};

type ActionsTypes = AddPostActionType | ChangeNewTextActionType;

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Serg", likesCount: 10 },
        { id: 2, message: "Lex", likesCount: 23 },
      ],
      newPostText: "You are Welcome Serhii !!!",
      profile: null,
    },
    dialogsPage: {
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
      newMessageBody: "",
    },
    sidebar: {
      firstName: [{ id: 1, name: "Friends" }],
      friends: [
        { id: 2, name: "Dem" },
        { id: 3, name: "Flop" },
        { id: 4, name: "Fes" },
      ],
      newNameFriends: "",
    },
  },
  _callSubscribe(_state: any) {
    console.log("State changed");
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._callSubscribe(this._state);
  },
  addPost(postText: string) {
    const newPost: PostsType = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscribe(this._state);
  },
  _onChange() {
    console.log("state change");
  },
  _subscribe(callback) {
    this._callSubscribe = callback;
  },
  getState() {
    return this._state;
  },
  dispatch(action: any) {
    if (action.type === "ADD-POST") {
      const newPost: PostsType = {
        id: new Date().getTime(),
        message: action.postText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._onChange();
    } else if (action.type === "CHANGE-NEW-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._onChange();
    }
    /*this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscribe(this._state);*/
  },
};

export default store;

// @ts-ignore
window.state = store;

//store - OOP
