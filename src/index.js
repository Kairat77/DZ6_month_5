import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import thunk from "redux-thunk";
import {rootReducer} from "./redux/reducers";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";




const store = createStore(rootReducer, applyMiddleware(logger, thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);


