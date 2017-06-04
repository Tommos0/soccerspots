/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Card from './components/card';
import InitScreen from './components/init_screen';
import Router, {Route} from './components/router/router';

const routeToComponent = function (route) {
    switch (route) {
        case 'index' :
            return <Text>index</Text>;
        case 'card'  :
            return <Card>card</Card>
    }
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'index',
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    {/*<Route name="test"><Text>asd</Text></Route>*/}
                </Router>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('soccerspots', () => soccerspots);
{/*<View>*/}
{/*{ routeToComponent(this.state.route) }*/}
{/*</View>*/}
{/*<View>*/}
{/*<Button title="Card" onPress={e => { console.log('pressed'); this.setState({route : 'card'}) } }/>*/}
{/*</View>*/}
