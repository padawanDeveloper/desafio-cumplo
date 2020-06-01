import {applyMiddleware, createStore, compose} from 'redux';
import state from './reducers';
import reduxThunk from 'redux-thunk';
let store = createStore(
  state,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
