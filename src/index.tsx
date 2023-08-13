import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {StateType} from "./redux/state";
import store from "./redux/state";


 let rerenderEntireThree = (state: StateType) => {
     ReactDOM.render(
         <HashRouter>
             <App state={state}
                  dispatch={store.dispatch.bind(store)}
                  store={store}/>
         </HashRouter>,
         document.getElementById('root'));
}


rerenderEntireThree(store.getState());

store.subscribe( () => {
    const state = store.getState()
    rerenderEntireThree(state)
} );