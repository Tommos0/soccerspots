import React from 'react';
import {connect} from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
const stateToProps = (state) => {
    return {
        state : state
    };
};

const dispatchToProps = {

};



export default class extends connect(stateToProps, dispatchToProps) (props =>
{
    return <View><Text>{JSON.stringify(props)}</Text></View>
}
){
    componentWillMount() {
        console.log(this.props);
        console.log('router will mount');
        this.store.dispatch({type:'testaction'});
    }
};

export class Route extends React.component {
    constructor() {
        super();
    }
}
