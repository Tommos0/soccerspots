import React from 'react';
import {connect} from 'react-redux';

import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import * as routeActions from './router/actions';
import Icon from './icon';

const stateToProps = (state) => {
    return {
        route : state.router.route
    };
};

const dispatchToProps = {
    setPage : routeActions.setPage
};

const NavButton = props =>
    <TouchableOpacity onPress={props.onPress}>
        <View><Icon icon={props.icon} color={props.color} /></View>
    </TouchableOpacity>;

const navItems = [
    { page : 'home', icon : 'field'},
    { page : 'calendar', icon : 'calendar'},
    { page : 'search', icon : 'zoom'},
    { page : 'trophy', icon : 'trophy'},
    { page : 'settings', icon : 'settings'},
];

const navigation = props =>
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        { navItems.map((item,key) =>
            <NavButton key={key} color={props.route === item.page?"black":"grey"} icon={item.icon} onPress={e => props.setPage({page:item.page})}  />
        )}
    </View>;

export default class extends connect(stateToProps,dispatchToProps) (navigation) {
    componentWillMount() {
        setTimeout(_ => this.store.dispatch(routeActions.setPage({page:'home'})),1000);
    }
}
