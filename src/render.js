import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {HashRouter} from "react-router-dom";

export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} addPost ={addPost}/>
        </HashRouter>,
        document.getElementById('root'));
}