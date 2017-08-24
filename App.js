import 'expo';
import {Font } from 'expo';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import {View} from 'react-native';

import Main from './Main';

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
                <Main />
            </Provider>
        );
    }
}