import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "../redux/profile-reducer";
import dialogsReducer from "../redux/dialogs-reducer";
import sidebarReducer from "../redux/sidebar-reducer";
import usersReducer from "../redux/users-reducer";
import authReducer from "../redux/auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "redux/app-reducer";

export type AppStateType = ReturnType<typeof reducer>;

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  //form: formReducer,
  app: appReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

(window as any).__store__ = store;

export default store;
