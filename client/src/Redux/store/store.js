
import { createStore,applyMiddleware  } from 'redux';
import TodoReducer from '../reducer/reducer';
import thunk from 'redux-thunk';
// import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let store = createStore( 
            TodoReducer ,applyMiddleware(thunk));

    
export default store;

