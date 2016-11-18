import React, { Component } from 'react';
import { connect } from 'react-redux';

import Rx, { Observable } from 'rx';
const { fromPromise, fromEvent, just } = Observable;

import { getTodos, saveTodo } from '../actions';

import TodoList from './TodoList';


const stateToProps = state => ({
    homeReducer: state.homeReducer
});

const actionToProps = {
    getTodos,
    saveTodo
};

@connect(stateToProps, actionToProps)
export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getTodos && this.props.getTodos();
    }

    addTodoList(e) {
        if(e.keyCode !== 13)
            return;


        const value = e.target.value;

        console.log(value);

        this.props.saveTodo && this.props.saveTodo(value);

        e.target.value = '';
    }

    render() {
        return (
            <div className="todo">
                <input type="text" onKeyDown={e => this.addTodoList(e)}/>
                <TodoList { ...this.props.homeReducer } />
            </div>
        );
    }
}