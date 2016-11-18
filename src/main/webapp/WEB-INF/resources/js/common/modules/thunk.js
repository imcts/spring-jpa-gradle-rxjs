//API
import api from './api';

export default store => next => action => typeof action === 'function' ? action(store.dispatch, store.getState, api) : next(action);
