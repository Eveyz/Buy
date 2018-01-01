import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import setAuthToken from '../../setAuthToken';
import { setCurrentUser } from '../actions/users_actions';
import jwtDecode from 'jwt-decode';

// const middleware = applyMiddleware(thunk, logger());
// const store = createStore(rootReducer, applyMiddleware(thunk));
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

store.subscribe(function() {
  console.log('current state is: ', store.getState());
})

module.exports = store;
