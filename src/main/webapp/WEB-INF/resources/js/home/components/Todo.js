import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, content, doDelete, doUpdate } = this.props;

        return (
            <div>
                <span className="todo-id">{ id }</span>
                <span className="todo-content">
                    <input type="type" defaultValue={ content } onKeyDown={ e => doUpdate(e, id) } />
                </span>
                <span className="todo-delete" onClick={e => doDelete(id)}>x</span>
            </div>
        );
    }
}