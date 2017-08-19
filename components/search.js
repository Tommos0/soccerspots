import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Card from "./card";
import { Dimensions } from "react-native";
import Icon from './icon';

export default class Search extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView  style={{height: 'auto'}}>
                    { new Array(10).fill().map((el, index) =>
                        <Card key={index} style={style.card} name={`Voetbalpleintje${index}`} />
                    )}
                </ScrollView>
                <View style={{flex:1, position:'absolute', right:"5%", bottom:"2%"}}>
                    <Icon icon="addspot-action" scale={3} color="red" onClick={() => console.log('click')} />
                </View>
            </View>
        )
    }
}

const height = Dimensions.get('window').height;


const style = StyleSheet.create({
    card: {
        height: height/2.5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    }
});