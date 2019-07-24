import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducers";

import './index.css';
import App from './App';

const composeEnhancers = window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE___ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);


ReactDOM.render(
<Provider>
<Router>
<App />
</Router>
</Provider>, 
document.getElementById('root'));

