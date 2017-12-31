import { AppRegistry, Image, Button, StyleSheet } from 'react-native';
import App from './app/App';
import Menu from './app/Menu';
import React from 'react';
import ToastDemo from './app/ToastDemo';
import { TabNavigator } from 'react-navigation';
import bottomNav from './app/components/Navbar/BottomNav';

class MyHomeScreen extends React.Component {

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

let tabList = [
    {
        text: ' Menu1 ',
        redirectLink: 'home',
        id: 'home',
        image: require('./app/assets/play-button-small.png'),
        selectionImage: require('./app/assets/play-button-selected.png'),
        components: Menu
    },
    {
        text: ' Menu2 ',
        redirectLink: 'menu2',
        id: 'Menu2',
        image: require('./app/assets/settings.png'),
        selectionImage: require('./app/assets/settings-selected.png'),
        components: ToastDemo
    },
    {
        text: ' Menu3 ',
        redirectLink: 'menu3',
        id: 'Menu3',
        image: require('./app/assets/user.png'),
        selectionImage: require('./app/assets/user-selected.png'),
        components: App
    },
    {
        text: ' Menu4 ',
        redirectLink: 'menu4',
        id: 'Menu4',
        image: require('./app/assets/settings.png'),
        selectionImage: require('./app/assets/settings-selected.png'),
        components: App
    },
];

const MyApp = TabNavigator({
    Home: {
        screen: App,
        navigationOptions : {
            tabBarLabel: 'Home',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./app/assets/play-button-selected.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Notifications: {
        screen: MyNotificationsScreen,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./app/assets/play-button.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
}, {
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
        activeTintColor: '#e91e63',
    },
    tabBarPosition: 'bottom',
    animationEnabled: true,
});

const Demo = bottomNav(tabList);


AppRegistry.registerComponent('demo', () => Demo);
