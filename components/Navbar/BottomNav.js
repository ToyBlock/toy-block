import { StackNavigator, TabNavigator } from 'react-navigation';
import { Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';



const tabBarConfiguration = {
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 1,
        },
    },
    tabBarPosition: 'bottom'
};




const styles = StyleSheet.create({
    footerIcons: {
        height: 30,
        width: 30,
        marginLeft: 5,
        alignSelf: 'center',
    },
});

export default function bottomNav(tabList = [], config = {}) {
    let app = {};
    tabList.forEach((item) => {
        app[item.id] = {
            screen: item.components,
            navigationOptions: {
                tabBarLabel: item.text,
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        style={styles.footerIcons}
                        source={focused ? item.selectionImage : item.image}
                    />
                )
            }
        }
    });
    let option = Object.assign(tabBarConfiguration, config);

    return TabNavigator(app, option)
}




