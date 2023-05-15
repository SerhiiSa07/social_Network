
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';
import {HashRouter} from "react-router-dom";

 let rerenderEntireThree = (state: { profilePage: any; dialogPage: any; }) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} addPost ={addPost} updateNewPostText={updateNewPostText}/>
        </HashRouter>,
        document.getElementById('root'));
}
rerenderEntireThree(state);
 subscribe(rerenderEntireThree);