import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import React from 'react';

export default class Rating extends React.Component {
    render () {
        return <View>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
               { new Array(5).fill().map((el, index) =>
                   <Circle
                       key={index}
                       style={[styles.margin, (index+1 <= this.props.score) ? styles.circleFilled : styles.circleEmpty ] }
                       radius={10}
                   />
               )}
               <Text style={{marginLeft: 5}}>{this.props.score} / 5</Text>
           </View>
        </View>;
    }
}

class Circle extends React.Component {
    render() {
        const circleStyle = {
            width: this.props.radius,
            height: this.props.radius,
            borderRadius: this.props.radius/2,
        };

        return (
            <View style={[this.props.style, circleStyle]} />
        )
    }
}


const styles = StyleSheet.create({
    margin: {
        marginLeft:3,
        marginRight:3,
    },
    circleFilled : {
        backgroundColor:"green"
    },
    circleEmpty : {
        backgroundColor:"#ccc"
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
});
