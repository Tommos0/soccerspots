import * as actions from './actions';

const defaultState = {
    route : 'init',
    params : null,
};

export default (state=defaultState, action) =>
{
    switch (action.type) {
        case actions.setPage.name :
            return { ...state, route:action.page, params:action.params};
        default:
            return state;
    }
};
