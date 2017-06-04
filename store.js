import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import epicMiddleware from './epic';

const store = createStore(rootReducer,applyMiddleware(epicMiddleware));

export default store;
