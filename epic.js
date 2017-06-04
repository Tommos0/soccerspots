import { combineEpics, createEpicMiddleware } from 'redux-observable';

import 'rxjs';

function testDefined(name,epic) {
    if (typeof epic === 'undefined')
        console.error('epic',name,'undefined');
}

const loggerEpic = (action$, store) => action$.filter(action => action.type !== 'logging').map(action => {
        console.log(action); return {type:'logging'};
});

const epicMiddleware = createEpicMiddleware( combineEpics ( loggerEpic ));

export default epicMiddleware;
