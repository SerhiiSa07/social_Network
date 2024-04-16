import { authAPI } from "api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "redux/auth-reducer";

/*type setAuthUserDataType = {
    data: any;
    userId: null,
    email: null,
    login: null,
    isAuth: false
}*/

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  //dispatch(somethingelse());
  //dispatch(somethingelse());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
