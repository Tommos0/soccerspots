import React from 'react';
import {connect} from 'react-redux';

import { View } from 'react-native';

const stateToProps = (state) => {
    return {
        route : state.router.route
    };
};

const router = props =>
    <View>
        {React.Children.map(props.children,child => child.props.name === props.route ? child : null)}
    </View>;

export default connect(stateToProps) (router)

export const Route = props => props.children;
