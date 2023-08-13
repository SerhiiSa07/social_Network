import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import store from "./redux/state";

export let rerenderEntireThree = (state) => {
     ReactDOM.render(
         <HashRouter>
             <App state={state}
                  dispatch={store.dispatch.bind(store)}
                  store={store}/>
         </HashRouter>,
         document.getElementById('root'));
}
