import store  from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

 let rerenderEntireThree = (state: any) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </HashRouter>,
        document.getElementById('root'));
}

rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree);