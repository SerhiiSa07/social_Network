import React from "react";
import "./App.css";
import Navbar from "components/Navbar/Navbar";
import Music from "components/Music/Music";
import News from "components/News/News";
import Settings from "components/Settings/Settings";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import FriendsContainer from "components/Friends/FriendsContainer";
import UsersContainer from "components/Users/UsersContainer";
import HeaderContainer from "components/Header/HeaderContainer";
import Login from "components/Login/Login";
import { PostsType, StoreType } from "redux/store";
import { ActionTypes } from "redux-form";
import { connect, Provider } from "react-redux";
import { getAuthUserData } from "redux/auth-reducer";
import { compose } from "redux";
import Preloader from "components/common/Preloader/Preloader";
import store from "redux/redux-store";
import { withSuspense } from "hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
class App extends React.Component<StoreType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    /*const state = props.store.getState();*/

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile/:userId?" render={withSuspense(DialogsContainer)} />
            <Route path="/messages" render={withSuspense(ProfileContainer)} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/friends" render={() => <FriendsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </div>
      </div>
    );
  }
}

//types

/*export type PropsType = {
  store: StoreType;
};*/

type MessageType = {
  message: string;
  posts: Array<PostsType>;
  addPostCallback: (postText: string) => void;
  changeNewTextCallback: (newText: string) => void;
  dispatch: (action: ActionTypes) => void;
};

function HelloMessage(props: MessageType) {
  let postMessageRef = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    if (postMessageRef.current) {
      props.addPostCallback(postMessageRef.current.value);
    }
  };

  return (
    <div>
      {props.message}
      <textarea ref={postMessageRef}></textarea>
      <button onClick={addPost}>add post</button>
    </div>
  );
}

const ByeMessage: React.FC<MessageType> = (props) => {
  return <h1>{props.message}</h1>;
};

const mapStateToProps = (state) => ({ initialized: state.app.initialized });

let AppContainer = compose(withRouter, connect(mapStateToProps, { getAuthUserData }))(App);

let SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
