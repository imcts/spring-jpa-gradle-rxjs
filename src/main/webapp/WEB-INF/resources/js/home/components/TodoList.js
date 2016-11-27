import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <div className="todo">
                {
                    this.props.todos.map((o, i) => <Todo key={ i } { ...Object.assign(o, this.props) }/>)
                }
            </div>
        );
    }
}