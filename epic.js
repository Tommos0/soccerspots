import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { Constants, Location, Permissions } from 'expo';

import { Observable } from 'rxjs';

import 'rxjs';
import 'rxjs/add/operator/delay';

function testDefined(name,epic) {
    if (typeof epic === 'undefined')
        console.error('epic',name,'undefined');
}

const loggerEpic = (action$, store) => action$.filter(action => action.type !== 'logging').map(action => {
        console.log(action); return {type:'logging'};
});

const locationEpic = combineEpics(
    (action$, store) => action$.filter(action => action.type === 'INIT').flatMapTo(
        Observable.fromPromise(Permissions.askAsync(Permissions.LOCATION))
         .map(result => ({type: "LOCATION_GRANTED", value: result.status !== 'denied'}))
         .catch(error => ({type: "LOCATION_GRANTED", value: false}))
    ),


    (action$, store) => action$.filter(action => action.type === 'LOCATION_GRANTED' && action.value).mapTo(
        { type: 'REFRESH_LOCATION' }
    ),

    (action$, store) => action$.ofType('REFRESH_LOCATION').flatMap((action) =>
        Observable.fromPromise(Location.getCurrentPositionAsync({}))
            .map(result => ({type: 'UPDATE_LOCATION', result}))
            .timeout(5000)
            .catch(error => Observable.of({type:'UPDATE_LOCATION_TIMEOUT'}))
    ),

    (action$, store) => action$.ofType('UPDATE_LOCATION').delay(60000).mapTo({type: 'REFRESH_LOCATION'})
);


const epics = combineEpics(loggerEpic, locationEpic);

const epicMiddleware = createEpicMiddleware( epics );

export default epicMiddleware;
