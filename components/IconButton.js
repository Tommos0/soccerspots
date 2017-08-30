import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default IconButton = (props) => {
    return (
        <TouchableHighlight onPress={props.onPress}>
            <View style={[style.button, props.active ? style.active : null, props.style]}>
                <Text>2v2</Text>
            </View>
        </TouchableHighlight>
    );
}


const style = StyleSheet.create({
    button: {
        backgroundColor: '#ccc',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white'
    },
    active: {
        borderColor: 'green'
    }
});
