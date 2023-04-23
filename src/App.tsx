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
import Friend from "./components/Friends/Friend";

const App = (props:any) => {

    return (
        <HashRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile' render={() => <Profile state={props.stateApp.profilePage} /> } />
                        <Route path='/messages' render={() => <Dialogs state={props.stateApp.dialogPage} /> } />
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/friends' render={() => <Friend state={props.stateApp.sidebar}/> } />
                    </Switch>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
