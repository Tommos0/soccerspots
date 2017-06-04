import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { AppRegistry, Text } from 'react-native';

import InitScreen from './components/init_screen';
import Router, {Route} from './components/router/router';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'index'
        }
    }

    render() {
        return <Provider store={store}>
                <Router>
                    <Route name="init"><InitScreen/></Route>
                    <Route name="test2"><Text>asd</Text></Route>
                </Router>
            </Provider>
        ;
    }
}

AppRegistry.registerComponent('soccerspots', () => soccerspots);
