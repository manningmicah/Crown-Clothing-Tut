import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from 'redux/reducers/root.reducer';

const middlwares = [ logger ];

const store = createStore(rootReducer, applyMiddleware(...middlwares));

export default store;
