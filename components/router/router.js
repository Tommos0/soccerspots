import React from 'react';
import {connect} from 'react-redux';

const stateToProps = state => ({ route : state.router.route });

const router = props => props.name === props.route ? React.Children.only(props.children) : null;

export default connect(stateToProps) (router)
