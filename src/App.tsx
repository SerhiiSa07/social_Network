import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {HashRouter, Route, Switch} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import State from "./redux/state";
import Friend from "./components/Friends/Friends";

const App = (props: any) => {
    console.log(props)

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/messages' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' /*component={Settings}*/ render={() => <Friends store={props.store} dispatch={props.dispatch}/>}/>
                    <Route path='/friends' render={() => <Friends store={props.store} dispatch={props.dispatch}/>}/>
                </Switch>
            </div>
        </div>
    );
};
export default App;
