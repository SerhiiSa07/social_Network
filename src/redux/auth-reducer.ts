import { authAPI } from "api/api";
import { Dispatch } from "redux";

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
        ...action.data,
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

export const setAuthUserData = (userId: any, email: any, login: any) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const getAuthUserData = () => (dispatch: any) => {
  authAPI.me().then((response: { data: { resultCode: number; data: { id: any; login: any; email: any } } }) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email));
    }
  });
};

/*export const toggleIsFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching});*/

export default authReducer;