import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./StoreContext";

export let rerenderEntireThree = () => {
    ReactDOM.render(
        <HashRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </HashRouter>,
        document.getElementById('root'));
}

rerenderEntireThree(store.getState());

store.subscribe( () => {
    const state = store.getState()
    rerenderEntireThree(state)
})