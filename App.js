import 'expo';
import { Font } from 'expo';
import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { Text, View } from 'react-native';

import InitScreen from './components/init_screen';
import Navigation from './components/navigation';
import Route from './components/router/router';

export default class App extends React.Component {

    componentDidMount() {
        Font.loadAsync({
            'Rajdhani-Bold': require('./assets/fonts/Rajdhani-Bold.ttf'),
            'Rajdhani-Regular': require('./assets/fonts/Rajdhani-Regular.ttf')
        }).then(() => this.setState({fontsLoaded: true}));

    }
    render() {
        if (!this.state.fontsLoaded) { return null; }
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
