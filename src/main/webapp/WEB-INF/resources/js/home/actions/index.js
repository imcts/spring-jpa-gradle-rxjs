export const GET_TODO_LIST = 'home/GET_TODO_LIST';
export const ADD_TODO_LIST = 'home/ADD_TODO_LIST';


//action payload
export const onLoad = ({ result }) => ({
    type: GET_TODO_LIST,
    payload: result
});

export const addTodo = ({ result }) => ({
    type: ADD_TODO_LIST,
    payload: result
});



export const saveTodo = content => (dispatch, getState, { POST }) => {
    const url    = '/register/todo',
          params = {
              content
          };

    POST(
        url,
        params
    )
    .then(({ data }) => {
        dispatch(addTodo(data));
    });
};

export const getTodos = () => (dispatch, getState, { GET }) => {
    const url = '/todos';

    GET(url)
    .then(({ data }) => {
        dispatch(onLoad(data));
    });
};