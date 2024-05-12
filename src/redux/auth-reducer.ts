import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";

/*type setAuthUserDataType = {
    data: any;
    userId: null,
    email: null,
    login: null,
    isAuth: false
}*/

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    /*case TOGGLE_IS_FETCHING:
        {
            return {...state, isFetching: action.isFetching}
        }*/
    default:
      return state;
  }
};

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: any) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.data.message.length > 0 ? response.data.message[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData(null, null, null, false));
  }
};

/*export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});*/

export default authReducer;
