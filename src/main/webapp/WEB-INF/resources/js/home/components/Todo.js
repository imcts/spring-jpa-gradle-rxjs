import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, content } = this.props;

        return (
            <div>
                <span className="todo-id">{ id }</span>
                <span className="todo-content">{ content }</span>
            </div>
        );
    }
}