import React from 'react';
import {connect} from 'react-redux';

import { View } from 'react-native';

const stateToProps = (state) => {
    return {
        route : state.router.route
    };
};

const router = props => {
    console.log('rendering');
    return props.name === props.route ? React.Children.only(props.children) : null;
};

export default connect(stateToProps) (router)

// export const Route = props => props.children;
