import 'expo';
import {Font, MapView} from 'expo';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import {ScrollView, Text, View} from 'react-native';

import InitScreen from './components/init_screen';
import Navigation from './components/navigation';
import Route from './components/router/router';

import Search from "./components/search";
import Map from "./components/map";



export default class App extends React.Component {
    componentWillMount() {
        this.state = { fontsLoaded: false }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Rajdhani-Bold': require('./assets/fonts/Rajdhani-Bold.ttf'),
            'Rajdhani-Regular': require('./assets/fonts/Rajdhani-Regular.ttf')
        });
        console.log('fonts loaded');
        this.setState({fontsLoaded: true})

    }
    render() {
        if (!this.state.fontsLoaded) { return <View /> }
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <Route name="init">
                        <InitScreen/>
                    </Route>
                    <View style={{ flex:1, flexDirection:'column'}} >
                        <View style={{flex : 1}}><Text>Header</Text></View>
                        <View style={{flex : 12, backgroundColor:"#ccc"}}>
                            <Route name="home">
                                <Text>Home</Text>
                            </Route>
                            <Route name="search">
                                <Search />
                            </Route>
                            <Route name="calendar">
                                <Map />
                            </Route>
                        </View>
                        <View style={{flex : 1}}>
                                <Navigation />
                        </View>
                    </View>
                </View>
            </Provider>
        );
    }
}
