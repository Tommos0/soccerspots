import * as actions from './actions';

const defaultState = {
    route : 'init',
    params : null,
};

export default (state=defaultState, action) =>
{
    switch (action.type) {
        case "SET_PAGE" :
            return { ...state, route:action.page, params:action.params};
        default:
            return state;
    }
};
