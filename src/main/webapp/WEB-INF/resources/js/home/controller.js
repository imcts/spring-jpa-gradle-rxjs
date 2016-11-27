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

//TODO 이걸 어디다 녹이나.. 고민중

//
//import Rx, { Observable } from 'rx';
//import $ from 'jquery';
//import axios from 'axios';
//
//const { fromPromise, fromEvent, just } = Observable;
//
////container
//const $container = $('#container');
//
////create refresh btn
//const refreshBtn = document.createElement('button');
//refreshBtn.innerText = 'refresh';
//$container.append(refreshBtn);
//
////create refresh Stream
////구독자 수만큼 subscribe 하기 때문에 3번의 request 발생.
//const refreshClickStream = fromEvent(refreshBtn, 'click').map(() => '/todos');
//
////create start Stream
//const startupRequestStream = just('/todos'); //onNext -> onCompleted
//
////merge stream
//const mergeStream = startupRequestStream
//    .merge(refreshClickStream) //merge to click stream.
//    .flatMap(url => fromPromise($.get(url))) //get Data and Promise flatMap 의 역할에 대해 조금더 알아볼 필요 있음.
//    .map(({ result }) => {
//        return result.map(o => `
//            <div>
//                <span>id: ${o.id}</span>
//                <span>id: ${o.content}</span>
//            </div>
//        `)
//    })
//    .subscribe(hbs => $container.append(hbs));