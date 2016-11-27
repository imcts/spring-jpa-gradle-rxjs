//lib
import { applyMiddleware, createStore, compose } from 'redux';

//reducer
import reducers from '../reducers';

//thunk
import thunk from 'common/modules/thunk';

//create store
export default createStore(
    reducers,
    undefined,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
