import {applyMiddleware, createStore} from 'redux';
import state from './reducers';
import reduxThunk from 'redux-thunk';
let store = createStore(state, {}, applyMiddleware(reduxThunk));

export default store;
