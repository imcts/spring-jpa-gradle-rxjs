import { ACTIONS } from '../actions';

const initialState = {
    todos: []
};

const reducer = {
    [ACTIONS.ADD_TODO_LIST]: (state, type, payload) => {
        state.todos.push({
            ...payload
        });

        return {
            ...state
        };
    },

    [ACTIONS.GET_TODO_LIST]: (state, type, payload) => ({ ...state, todos: payload }),

    [ACTIONS.DELETE_TODO_LIST]: (state, type, payload) => ({...state, todos: state.todos.filter(o => o.id !== payload.id)}),

    [ACTIONS.UPDATE_TODO_LIST]: (state, type, payload) => ({ ...state })
};

export default (state = initialState, { type, payload }) => reducer[type] ? reducer[type](state, type, payload) : state;




//import { ACTIONS } from '../actions';
//
//const initialState = {
//    todos: []
//};
//
//export default (state = initialState, { type, payload }) => {
//
//
//    switch(type) {
//        case ACTIONS.ADD_TODO_LIST:
//            state.todos.push({
//                ...payload
//            });
//
//            return {
//                ...state
//            };
//
//        case ACTIONS.GET_TODO_LIST:
//            return {
//                ...state,
//                todos: payload
//            };
//
//        case ACTIONS.DELETE_TODO_LIST:
//            return {
//                ...state,
//                todos: state.todos.filter(o => o.id !== payload.id)
//            };
//
//        case ACTIONS.UPDATE_TODO_LIST:
//            return {
//                ...state
//            };
//
//        default:
//            return state;
//    }
//};

