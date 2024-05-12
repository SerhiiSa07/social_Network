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
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
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

export const addPostActionCreation = (newPostText: any) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile: any) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status: any) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId: any) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: any) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: any) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
