import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import loggerMiddleware from './middleware/logger';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import thunkMiddleware from 'redux-thunk';

const configureStore = preloadedState => {
  let middlewares = [];
  let composedEnhancers = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares = [loggerMiddleware, thunkMiddleware];
  } else {
    middlewares = [thunkMiddleware];
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  if (process.env.NODE_ENV === 'development') {
    composedEnhancers = composeWithDevTools(...enhancers);
  } else {
    composedEnhancers = compose(...enhancers);
  }
  return createStore(rootReducer, preloadedState, composedEnhancers);
};
export default configureStore;
