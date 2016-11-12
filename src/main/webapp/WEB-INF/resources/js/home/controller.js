import Rx, { Observable } from 'rx';
import $ from 'jquery';
import axios from 'axios';

const { fromPromise, fromEvent, just } = Observable;

//container
const $container = $('#container');

//create refresh btn
const refreshBtn = document.createElement('button');
refreshBtn.innerText = 'refresh';
$container.append(refreshBtn);

//일단은 임시로 Spring Server 보도록 구성
const server = 'http://local.coupang.com:8080';

//create refresh Stream
//구독자 수만큼 subscribe 하기 때문에 3번의 request 발생.
const refreshClickStream = fromEvent(refreshBtn, 'click').map(() => server + '/todos');

//create start Stream
const startupRequestStream = just(server + '/todos'); //onNext -> onCompleted

//merge stream
const mergeStream = startupRequestStream
    .merge(refreshClickStream) //merge to click stream.
    .flatMap(url => fromPromise($.get(url))) //get Data and Promise flatMap 의 역할에 대해 조금더 알아볼 필요 있음.
    .map(({ result }) => {
        return result.map(o => `
            <div>
                <span>id: ${o.id}</span>
                <span>id: ${o.content}</span>
            </div>
        `)
    })
    .subscribe(hbs => $container.append(hbs));
