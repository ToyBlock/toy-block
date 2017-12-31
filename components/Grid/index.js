import React, { Component } from 'react';

import { View, StyleSheet, Dimensions } from 'react-native';


export default class Grid extends Component{
    render() {
        return (
            <View style={styles.grid_container}>
                { this.props.children }
            </View>
        )
    }
}

function vw(percentageWidth) {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

const COLUMNS = 2;
const MARGIN = vw(1);
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

const styles = StyleSheet.create({
    grid_container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
})