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

const App = (props: { state: { profilePage: any; dialogPage: any; }; addPost: any; updateNewPostText: any; }) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                        />}/>
                        <Route path='/messages' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        {/*<Route path='/friends' render={() =><Friends state={props.state.sidebar}/>} />*/}
                    </Switch>
                </div>
            </div>
    )
}

export default App;
