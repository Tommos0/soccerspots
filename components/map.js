import React from 'react';
import {MapView} from "expo";
import { Constants, Location, Permissions } from 'expo';
import {Button, Text, View} from 'react-native';

const LOCATION_STATUS = {
    WAITING: 0,
    GRANTED: 1,
    DENIED: 2
};

export default class Map extends React.Component {
    componentWillMount() {
        this.setState({location: null, locationStatus: LOCATION_STATUS.WAITING});
    }
    componentDidMount() {
        this.getLocationAsync();
    }

    promiseTimeout = (time) => new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve();
        }, 100);
    });


    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationStatus: LOCATION_STATUS.DENIED
            });
        }

        let location = await Promise.race([
            Location.getCurrentPositionAsync({}),
            this.promiseTimeout(500)
        ]);

        this.setState({ location: location, locationStatus: LOCATION_STATUS.GRANTED });
    };

    render() {
        if (this.state.locationStatus === LOCATION_STATUS.WAITING) return <View />;

        let initialRegion;
        if (this.state.location) {
            initialRegion = {
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
        }
        else {
            initialRegion = {
                latitude: 52.4,
                longitude: 4.9,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            }
        }

        return (
            <View style={{flex:1}}>
                <MapView
                    style={{flex:1}}
                    showsUserLocation
                    zoomEnabled={true}
                    initialRegion={initialRegion}
                >
                    <MapView.Marker
                        draggable={true}
                        coordinate={{
                            latitude: 52.4,
                            longitude: 4.9
                        }}
                        title="title"
                        description="description"
                    />
                </MapView>

                <View style={{flex:1, position:'absolute'}}>
                    <Button title="testje" />
                        <View style={{width:200, height:200, backgroundColor:'green'}}>
                </View>




                </View>

            </View>
        )
    }
}



/*
Object {
  "coords": Object {
    "accuracy": 20,
    "altitude": 0,
    "heading": 0,
    "latitude": 37.4219983,
    "longitude": -122.084,
    "speed": 0,
  },
  "mocked": false,
  "timestamp": 1503143087000,
}
 */


/*
type Region {
  latitude: Number,
  longitude: Number,
  latitudeDelta: Number,
  longitudeDelta: Number,
}
 */

/*
type LatLng {
  latitude: Number,
  longitude: Number,
}
 */