import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "../redux/profile-reducer";
import dialogsReducer from "../redux/dialogs-reducer";
import sidebarReducer from "../redux/sidebar-reducer";
import usersReducer from "../redux/users-reducer";
import authReducer from "../redux/auth-reducer";
import thunkMiddleware from "redux-thunk";

export type AppStateType = ReturnType<typeof reducer>;

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
