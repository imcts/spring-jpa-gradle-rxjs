import Enum from 'common/modules/enum';

export const ACTIONS = new Enum(
    'GET_TODO_LIST',
    'ADD_TODO_LIST',
    'DELETE_TODO_LIST',
    'UPDATE_TODO_LIST'
);

//action payload
const getTodoAction = ({ result }) => ({
    type: ACTIONS.GET_TODO_LIST,
    payload: result
});

const addTodoAction = ({ result }) => ({
    type: ACTIONS.ADD_TODO_LIST,
    payload: result
});

const deleteTodoAction = ({ result }) => ({
    type: ACTIONS.DELETE_TODO_LIST,
    payload: result
});

const updateTodoAction = ({ result }) => ({
    type: ACTIONS.UPDATE_TODO_LIST,
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
        console.log(data, ' : async done');
        dispatch(updateTodoAction(data));
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
        dispatch(deleteTodoAction(data));
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
        dispatch(addTodoAction(data));
    });
};

export const getTodos = () => (dispatch, getState, { GET }) => {
    const url = '/todos';

    GET(url)
    .then(({ data }) => {
        dispatch(getTodoAction(data));
    });
};