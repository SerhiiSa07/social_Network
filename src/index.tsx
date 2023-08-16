import React from 'react';
import './index.css';
import store, {StateType} from "./redux/state";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireThree = (state: StateType) => {
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
})