import React from 'react';
import {LinearGradient, MapView} from "expo";
import {Button, Text, View, ScrollView, Dimensions, TouchableHighlight, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import IconButton from '../IconButton';
import ButtonGroup from '../ButtonGroup';

const width  = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const mapStateToProps = (state) => console.log(state) || ({
   location: state.location.coords
});

const MapOverlay = (props) => (
    <View style={{position: 'absolute', width:'100%'}}>
        <Text>blabla</Text>
    </View>
);

class MapComponent extends React.Component {
    componentWillMount() {
        this.state = {
            mapView: false,
            fieldUnderground: 1,
            fieldSize: 1
        }
    }

    toggleView = () => {
        this.setState({mapView: !this.state.mapView})
    }

    map = () => (
        <View style={{flex:1}}>
            <MapView
                onRegionChangeComplete={console.log}
                style={{flex:1}}
                showsUserLocation
                zoomEnabled={this.state.mapView}
                scrollEnabled={this.state.mapView}
                initialRegion={{
                    latitude: this.props.location.latitude,
                    longitude: this.props.location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
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
            <LinearGradient style={{position:'absolute', width:'100%', height:'10%'}} colors={[ 'rgba(255,255,255,1)',  'rgba(255,255,255,.6)', 'rgba(255,255,255,0)' ]} />
            {!this.state.mapView && MapOverlay()}
        </View>
    );

    settings = () => (
        <View style={{flex:.5}}>
            <Text style={style.text}>Select the type of underground</Text>
            <ButtonGroup active={this.state.fieldUnderground} onChange={(value) => this.setState({fieldUnderground: value})}>
                <IconButton style={{backgroundColor:'grey'}} value={1} />
                <IconButton style={{backgroundColor:'#888'}} value={2} />
                <IconButton style={{backgroundColor:'red'}} value={3} />
                <IconButton style={{backgroundColor:'blue'}} value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>


            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>

            <Text style={style.text}>Select the size of the field</Text>
            <ButtonGroup active={this.state.fieldSize} onChange={(value) => this.setState({fieldSize: value})}>
                <IconButton value={1} />
                <IconButton value={2} />
                <IconButton value={3} />
                <IconButton value={4} />
            </ButtonGroup>
        </View>
    );

    render() {
        if (this.state.mapView) return (
            <View style={{flex:1}}>
                {this.map()}
            </View>
        );

        else return (
            <ScrollView style={{flex:1, flexDirection:'column'}}>
                <TouchableHighlight style={{flex: 1}} onPress={this.toggleView} >
                    <View style={{height:height/3, backgroundColor:'yellow'}}>
                        {this.map()}
                    </View>
                </TouchableHighlight>
                {this.settings()}
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(MapComponent);

const style = StyleSheet.create({
    text: {
        fontFamily: 'Rajdhani-Regular',
        fontSize: 16,
        color: '#888',

    },
    active: {
        borderColor: 'green'
    }
});



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