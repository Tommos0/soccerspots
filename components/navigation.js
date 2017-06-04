import React from 'react';
import {connect} from 'react-redux';

import { View, Text } from 'react-native';

import * as routeActions from './router/actions';

const stateToProps = (state) => {
    return {
        route : state.router.route
    };
};

const navigation = props =>
    <View>
        <Text>props.route</Text>
    </View>;

export default connect(stateToProps) (navigation)
