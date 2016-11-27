import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as homeActions from '../actions';

import TodoList from './TodoList';

const stateToProps = state => ({
    homeReducer: state.homeReducer
});

const actionToProps = {
    ...homeActions
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

        const target = e.target,
              value  = target.value;

        if(value === '')
            return;

        this.props.saveTodo && this.props.saveTodo(value);

        target.value = '';
    }

    doDelete(id) {
        this.props.deleteTodo && this.props.deleteTodo(id);
    }

    doUpdate(e, id) {
        if(e.keyCode !== 13)
            return;

        const target = e.target,
              value  = target.value;

        this.props.updateTodo && this.props.updateTodo(id, value);
    }

    render() {
        return (
            <div className="todo">
                <input type="text" onKeyDown={e => this.addTodoList(e)}/>

                <TodoList
                    { ...this.props.homeReducer }
                    doDelete={id => this.doDelete(id)}
                    doUpdate={(e, id) => this.doUpdate(e, id)}
                />
            </div>
        );
    }
}