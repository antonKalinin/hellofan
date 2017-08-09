/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import reducers from './reducers';

const Main = () => (
    <Provider store={createStore(reducers)}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(<Main />, document.getElementById('app'));
