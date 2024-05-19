import { profileAPI, usersAPI } from "api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
};

let initialState = {
  posts: [
    { id: 1, message: "Serg", likesCount: 0 },
    { id: 2, message: "Lex", likesCount: 23 },
    { id: 3, message: "BlaBla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 2 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

type addPostActionCreationType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPostActionCreation = (newPostText: string): addPostActionCreationType => ({
  type: ADD_POST,
  newPostText,
});

type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile });

type setStatusType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status });

type deletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

type getUserProfileType = {
  type: typeof SET_STATUS;
  userId: number;
};
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file: string) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export const saveProfile = (profile: string) => async (dispatch: any) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { contacts: { facebook: response.data.message[0] } }));
  }
};

export default profileReducer;
