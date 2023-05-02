import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";
import {HashRouter} from "react-router-dom";

ReactDOM.render( <HashRouter>
    <App state={state}/>
</HashRouter>,
  document.getElementById('root')
);