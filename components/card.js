import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image

} from 'react-native';

import React from 'react';
import Rating from './rating';

export default class Card extends React.Component {
    render() {
        return <View style={[this.props.style, style.container]}>
        <View style={{flex: 5}}>
          <Image
            style={{flex: 1}}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2CxOJIZX-hrhUZzyBcZ8t3_aJ6Zo0VFvs_loZIEpl_SkXUWJ0JeLTf-A'}}
          />
        </View>
        <View style={{flex: 3}}>
          <View style={style.bottom}>
            <Text style={style.name}> {this.props.name}</Text>
            <Rating score={3}/>
          </View>
        </View>
        <View>
          <Image
            source={{uri: 'https://pbs.twimg.com/profile_images/3165824968/721ae4b725f6f5638b50527438f6901e.jpeg'}}
          />
        </View>
        </View>;
    }
}

const style = StyleSheet.create({
    container: {
        // flex: .5, //for now
        backgroundColor: 'white',
        // height: 500

    },
    bottom: {
        flex: 1,
        paddingLeft: '5%',
        paddingRight: '10%',
        paddingTop: '5%',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc'
    },
    name: {
        fontSize: 30,
        fontFamily: 'Rajdhani-Bold'
    }
});
