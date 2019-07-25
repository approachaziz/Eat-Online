import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'semantic-ui-css/semantic.min.css'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/reducers/index';
// const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(fetchAllPosts());
// const store=store();

ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister();
// export default connect;