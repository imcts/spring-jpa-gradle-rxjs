import { GET_TODO_LIST, ADD_TODO_LIST } from '../actions';

const initialState = {
    todos: []
};

export default (state = initialState, { type, payload }) => {


    switch(type) {
        case ADD_TODO_LIST:
            state.todos.push({
                ...payload
            });

            return {
                ...state
            };

        case GET_TODO_LIST:
            return {
                ...state,
                todos: payload
            };

        default:
            return state;
    }
};
