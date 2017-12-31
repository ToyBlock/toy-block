import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import Menu from '../components/Menu';

export default class Menus extends Component{
    handlePress = (id) => {
        console.log(id);
    }
    render() {
        let list = [
            {
                id: 'home',
                image: require('./assets/play-button.png'),
                text: 'home'
            },
            {
                id: 'play',
                image: require('./assets/play-button.png'),
                text: 'home'
            },
            {
                id: 'yyy',
                image: require('./assets/play-button.png'),
                text: 'home'
            },
            {
                id: 'tttt',
                image: require('./assets/play-button.png'),
                text: 'home'
            },

        ]
        return (
            <View style={styles.container}>
                <Menu
                    list={list}
                    onPress={ this.handlePress }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})