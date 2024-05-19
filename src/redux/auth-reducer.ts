import { authAPI, ResultCodesEnum, ResultCodesForCapctha } from "api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    /*if (response.data.resultCode === ResultCodesForCapctha.CaptchaIsRequired) {
      dispatch(getCaptchaUtl());
    }*/
    let message = response.data.message.length > 0 ? response.data.message[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

/*export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});*/

export default authReducer;
