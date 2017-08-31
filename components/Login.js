import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Logo from './logo';
import LoginForm from './LoginForm'


export default class Login extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.logoContainer}>
                    <Logo style={style.logo}/>
                    <Text style={style.title}>SOCCERSPOTS</Text>
                </View>
                <View style={style.formContainer}>
                    <LoginForm />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005A40',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        fontFamily:'Rajdhani-Bold',
        color:'white',
        fontSize:28,
        marginTop:30
    }
});