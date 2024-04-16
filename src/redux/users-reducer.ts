import { usersAPI } from "api/api";
import { setUserProfile } from "./profile-reducer";
import { Dispatch } from "redux";
import { StateType, StoreType } from "redux/store";

const FOLLOW = "FOLLOW";

const UNFOLLOW = "UNFOLLOW";

const SET_USERS = "SET_USERS";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type UserType = {
  userId: string;
  users: string;
  currentPage: any;
  count: any;
  isFetching: any;
};

type InitialStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<UserType>;
};

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 40,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state: InitialStateType, action: StateType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u: any) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId: any) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId: any) => ({ type: UNFOLLOW, userId });

export const setUsers = (users: any) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage: any) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount: any) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching: any) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching: any, userId: any) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page: any, pageSize: any) => (dispatch: Dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  usersAPI.getUsers(page, pageSize).then((data: any) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalUsersCount));
  });
};
export const follow = (userId: any) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export const unfollow = (userId: any) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export default usersReducer;
