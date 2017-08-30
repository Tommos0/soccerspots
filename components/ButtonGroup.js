import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default ButtonGroup = (props) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {React.Children.map(props.children,
                (child) => React.cloneElement(child, {
                    active: child.props.value === props.active,
                    onPress: () => props.onChange(child.props.value)
                })
            )}
        </View>
    );
}

//
// const style = StyleSheet.create({
//     button: {
//         backgroundColor: '#ccc',
//         height: 50,
//         width: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: 2,
//         borderWidth: 2,
//         borderColor: 'white'
//     },
//     active: {
//         borderColor: 'green'
//     }
// });
