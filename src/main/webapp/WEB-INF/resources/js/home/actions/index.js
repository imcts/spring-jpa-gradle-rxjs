export const GET_TODO_LIST    = 'home/GET_TODO_LIST';
export const ADD_TODO_LIST    = 'home/ADD_TODO_LIST';
export const DELETE_TODO_LIST = 'home/DELETE_TODO_LIST';
export const UPDATE_TODO_LIST = 'home/UPDATE_TODO_LIST';


//action payload
const getTodoAction = ({ result }) => ({
    type: GET_TODO_LIST,
    payload: result
});

const addTodoAction = ({ result }) => ({
    type: ADD_TODO_LIST,
    payload: result
});

const deleteTodoAction = ({ result }) => ({
    type: DELETE_TODO_LIST,
    payload: result
});

const updateTodoAction = ({ result }) => ({
    type: UPDATE_TODO_LIST,
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