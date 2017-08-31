import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions,
    View,
    Image
} from 'react-native';

{/* <Icon style={styles.userIcon} name="ios-user" size={20} color="#000"/> */}

export default class LoginForm extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={style.container}>
                <TextInput
                    placeholder='USERNAME OR EMAIL'
                    placeholderTextColor='#AEAEAE'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={style.inputTop}/>
                <TextInput
                    placeholder='PASSWORD'
                    placeholderTextColor='#AEAEAE'
                    secureTextEntry
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                    style={style.inputBottom}/>
                <TouchableOpacity style={style.buttonContainer}>
                    <Text style={style.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={style.h3}>Not yet a member?</Text>
                <TouchableOpacity>
                    <Text style={style.h4}>Sign up</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        padding: 25
    },
    userIcon: {
        padding:10
    },
    inputTop: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 16,
        height: 60,
        backgroundColor: '#FBFAFF',
        marginBottom: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        paddingHorizontal: 15
    },
    inputBottom: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 16,
        height: 60,
        backgroundColor: '#FBFAFF',
        marginBottom: 30,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        paddingHorizontal: 15
    },
    buttonContainer: {
        backgroundColor: '#F5A623',
        paddingVertical: 15,
        borderRadius: 3
    },
    buttonText: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    },
    h3: {
        fontFamily: 'Rajdhani-Regular',
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        marginTop: 10
    },
    h4: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 14,
        textAlign: 'center',
        color: '#F5A623',
        marginTop: 5
    },
});