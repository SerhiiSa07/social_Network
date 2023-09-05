import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Switch} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Users from "./components/Users/Users";


export type AppPropsType = {
    dispatch: any;
    state: any;
}

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/messages'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/users'
                           render={ () => <Users/> }/>
                </Switch>
            </div>
        </div>
    );
};

export default App;
