import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import Card from "./card";
import { Dimensions } from "react-native";

export default class Search extends React.Component {
    render() {
        return (
            <ScrollView  style={{height: 'auto'}}>
                { new Array(10).fill().map((el, index) =>
                    <Card key={index} style={style.card} name={`Voetbalpleintje${index}`} />
                )}
            </ScrollView>
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