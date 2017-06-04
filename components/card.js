import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image

} from 'react-native';

import React, { Component } from 'react';
import Logo from './logo';

class Card extends React.Component {


    render () {
        return <View>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2CxOJIZX-hrhUZzyBcZ8t3_aJ6Zo0VFvs_loZIEpl_SkXUWJ0JeLTf-A'}}
            />

            <Logo />

        </View>;
    }


}

export default Card
