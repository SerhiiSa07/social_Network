import { profileAPI, usersAPI } from "api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Serg", likesCount: 0 },
    { id: 2, message: "Lex", likesCount: 23 },
    { id: 3, message: "BlaBla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 2 },
  ],
  newPostText: "You are Welcome Serhii !!!",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreation = () => ({ type: ADD_POST });
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status: any) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId: any) => (dispatch: any) => {
  usersAPI.getProfile(userId).then((response: { data: any }) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId: any) => (dispatch: any) => {
  profileAPI.getStatus(userId).then((response: { data: any }) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status: any) => (dispatch: any) => {
  profileAPI.updateStatus(status).then((response: { data: any }) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const updateNewPostTextActionCreator = (text: any) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
