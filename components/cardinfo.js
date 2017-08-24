import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import Rating from './rating';

export default class Cardinfo extends React.Component {
    render() {
        return (
        <View style={style.containermain}>

        <View style={[this.props.style, style.containerleft]}>
            <View style={style.top}>
                <Text style={style.name}> {this.props.name}</Text>
            </View>
            <View style={style.bottom}>
                    <Rating score={3} />
                    <Text style={style.text}>  • </Text>
                    <Text style={style.text}> 2 km nearby</Text>
            </View>
        </View>

        <View style={style.containerright}>
            <Image style={style.image} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2CxOJIZX-hrhUZzyBcZ8t3_aJ6Zo0VFvs_loZIEpl_SkXUWJ0JeLTf-A'}}>
            </Image>
        </View>
        </View>
        )
    }
}

const style = StyleSheet.create({
    text: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 16,
        color: '#c1c1c1'
    },
    containermain: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'grey',
    },
    containerleft: {
        flex: 3,
    },
    containerright: {
        flex: 1,
    },
    top: {
        flex: 8,
        justifyContent: 'center',
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    bottom: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    name: {
        fontSize: 22,
        fontFamily: 'Rajdhani-Bold'
    },
    image: {
        flex: 1,
        flexDirection: 'row'
    }
});
