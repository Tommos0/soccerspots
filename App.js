import 'expo';
import { Font } from 'expo';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import {ScrollView, Text, View} from 'react-native';

import InitScreen from './components/init_screen';
import Navigation from './components/navigation';
import Route from './components/router/router';

import Card from './components/card';

import { Dimensions } from "react-native";



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
        let height = Dimensions.get('window').height;
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
                                <ScrollView  style={{height: 'auto'}}>
                                    <Card style={{height: height/3}} name="Voetbalpleintje" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje2" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                    <Card style={{height: height/3}} name="Voetbalpleintje3" />
                                </ScrollView>
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
