import { combineReducers }  from 'redux';

const rootReducer = combineReducers({
    dummy : (state = {test : 'bla'},action) => state
});

export default rootReducer;
