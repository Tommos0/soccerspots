import { combineReducers }  from 'redux';
import router from './components/router/reducer';

const defaultState = {
    locationGranted: null,
    coords: {
        accuracy: 664,
        altitude: 0,
        heading: 0,
        latitude: 52.36736,
        longitude: 4.8757839,
        speed: 0
    }
}

const locationReducer = (state = defaultState, action) => {
    let newState = state;
    if (action.type === 'LOCATION_GRANTED') {
        newState = {...state, locationGranted: action.value}
    } else if (action.type === 'LOCATION_UPDATED') {
        newState = {...state, coords: action.result.coords}
    }
    return newState;
}

const rootReducer = combineReducers({
    location: locationReducer,
    router
});

export default rootReducer;

/*
"result": Object {
    "coords": Object {
      "accuracy": 664,
      "altitude": 0,
      "heading": 0,
      "latitude": 52.36736,
      "longitude": 4.8757839,
      "speed": 0,
    },
    "mocked": false,
    "timestamp": 1503605164986,
  },
 */