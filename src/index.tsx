import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {StateType} from "./redux/store";
import StoreContext from "./StoreContext";

export let rerenderEntireThree = (state: StateType) => {
    ReactDOM.render(
        <HashRouter>
            <StoreContext.Provider value={store}>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     store={store}/>
            </StoreContext.Provider>
        </HashRouter>,
        document.getElementById('root'));
}

rerenderEntireThree(store.getState());

store.subscribe( () => {
    const state = store.getState()
    rerenderEntireThree(state)
})