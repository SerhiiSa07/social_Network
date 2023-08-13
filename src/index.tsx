import React from 'react';
import './index.css';
import store from "./redux/state";
import {rerenderEntireThree} from "./render";

rerenderEntireThree(store.getState());

store.subscribe( () => {
    const state = store.getState()
    rerenderEntireThree(state)
} );