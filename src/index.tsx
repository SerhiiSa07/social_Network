import store  from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

 let rerenderEntireThree = (state: { profilePage: any; dialogPage: any; }) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} addPost ={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </HashRouter>,
        document.getElementById('root'));
}
rerenderEntireThree(store._state);
 store.subscribe(rerenderEntireThree);