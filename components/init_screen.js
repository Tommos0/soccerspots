import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import Svg,{
    G,
    Path,
    Rect,
} from 'react-native-svg';

import Logo from './logo';

import React, { Component } from 'react';
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;

const InitScreen = React.createClass({
    render: function() {

        return (
            <View style={{width:width,height:height}}>
                <View style={{backgroundColor:'green', position:"absolute", left:0, top:0}}>
                    <Svg width={width} height={height}>
                        <Path d={`M${.2*width} 0 h ${.05*width} L ${.15*width} ${height} h ${-.08*width} Z`} fill="white" />
                        <Path d={`M0 0 h ${width} v ${.5*height} L 0 ${2/3*height} Z`} fill="black" opacity=".6" />
                    </Svg>
                </View>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{flex:1}} />
                    <View style={{flex:3, alignItems:'center'}}>
                        <Logo />
                        <Text style={{color:'white', fontSize:24, marginTop:30}}>SOCCERSPOTS</Text>
                    </View>

                    {/*<View style={{flex:2}} />*/}


                </View>

            </View>
        )
    }
});


export default InitScreen;

const triangle = {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: .5*width,
        borderRightWidth: .5*width,
        borderBottomWidth: 1*height,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
};
