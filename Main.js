import 'expo';
import React from 'react';

import {Text, View} from 'react-native';

import InitScreen from './components/init_screen';
import Navigation from './components/navigation';
import Route from './components/router/router';

import Search from "./components/search";
import NewSpot from "./components/new_spot/NewSpot";
import SpotDetail from './components/spotdetail';
import * as expo from "expo";

import { init } from './actions';

import { connect } from 'react-redux';

class MainComponent extends React.Component {
    componentWillMount() {
        this.props.init();
    }
    render() {
        if (this.props.locationGranted === null) {
            return (
                <View style={{flex:1}}>
                    <Route name="init">
                        <InitScreen/>
                    </Route>
                </View>
            )
        }
        return (
            <View style={{flex:1}}>
                <Route name="init">
                    <InitScreen/>
                </Route>
                <View style={{ flex:1, flexDirection:'column'}} >
                    <View style={{height: expo.Constants.statusBarHeight}}/>
                    <View style={{flex : 12, backgroundColor:"#ccc"}}>
                        <Route name="home">
                            <Text>Home</Text>
                        </Route>
                        <Route name="search">
                            <Search />
                        </Route>
                        <Route name="calendar">
                            {<NewSpot />}
                        </Route>
                        <Route name="trophy">
                            <SpotDetail />
                        </Route>
                    </View>
                    <View style={{flex : 1}}>
                            <Navigation />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    locationGranted: state.location.locationGranted,
    coords: state.location.coords
})

export default Main = connect(mapStateToProps, {init})(MainComponent);
