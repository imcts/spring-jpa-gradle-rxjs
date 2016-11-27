import Rx, { Observable } from 'rx';
const { fromPromise, fromEvent, just } = Observable;

import Enum from 'common/modules/enum';

export const ACTIONS = new Enum(
    'GET_TODO_LIST',
    'ADD_TODO_LIST',
    'DELETE_TODO_LIST',
    'UPDATE_TODO_LIST'
);

const asyncAction = type => ({ result }) => ({
    type,
    payload: result
});

export const updateTodo = (id, content) => (dispatch, getState, { PUT }) => {
    const url    = '/todos',
          params = {
              id,
              content
          };

    PUT(
        url,
        params
    )
    .then(({ data }) => {
        dispatch(asyncAction(ACTIONS.UPDATE_TODO_LIST)(data));
    });
};

export const deleteTodo = id => (dispatch, getState, { DELETE }) => {
    const url    = '/todos',
          params = {
              id : id
          };

    DELETE(
        url,
        params
    )
    .then(({ data }) => {
        dispatch(asyncAction(ACTIONS.DELETE_TODO_LIST)(data));
    });
};

export const saveTodo = content => (dispatch, getState, { POST }) => {
    const url    = '/todos',
          params = {
              content
          };

    POST(
        url,
        params
    )
    .then(({ data }) => {
        dispatch(asyncAction(ACTIONS.ADD_TODO_LIST)(data));
    });
};

export const getTodos = () => (dispatch, getState, { GET }) => {
    const url = '/todos';

    GET(url)
    .then(({ data }) => {
        dispatch(asyncAction(ACTIONS.GET_TODO_LIST)(data));
    });
};