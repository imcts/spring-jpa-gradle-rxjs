import '../../css/home/index.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import store from './store';
import { Provider } from 'react-redux';

import Home from './components/Home';

render(
    <Provider store={ store }>
        <Home />
    </Provider>,
    document.getElementById('container')
);