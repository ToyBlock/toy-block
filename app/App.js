/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Popover from '../components/Popover';
//import BottomNav from '../components/BottomNav';
import InputField from '../components/InputField';
import RadioButtonRound from '../components/Radio';
import ProgressBar from '../components/ProgressBar';
import GridItem from '../components/Grid/GridItem';
import MenuItem from '../components/Menu';
import Grid from '../components/Grid';
import BottomNav from '../components/Navbar/BottomNav';


const tabList = [
    {
        text: ' Menu1 ',
        redirectLink: 'home',
        id: 'home',
        image: require('./assets/play-button-small.png'),
        selectionImage: require('./assets/play-button-selected.png'),
        components: GridItem
    },
    {
        text: ' Menu2 ',
        redirectLink: 'menu2',
        id: 'Menu2',
        image: require('./assets/settings.png'),
        selectionImage: require('./assets/settings-selected.png'),
        components: GridItem
    },
    {
        text: ' Menu3 ',
        redirectLink: 'menu3',
        id: 'Menu3',
        image: require('./assets/user.png'),
        selectionImage: require('./assets/user-selected.png'),
        components: GridItem
    },
    {
        text: ' Menu4 ',
        redirectLink: 'menu4',
        id: 'Menu4',
        image: require('./assets/settings.png'),
        selectionImage: require('./assets/settings-selected.png'),
        components: GridItem
    },
];
export default class App extends Component<{}> {
    state = {
        isVisible: false,
        buttonRect: {},
    }

    componentDidMount() {
        console.log(this.refs.button.button);
        console.log(this.refs.test);
    }

    showPopover = () => {
        this.refs.button.button.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                buttonRect: {x: px, y: py, width: width, height: height}
            });
        });
    }

    closePopover = () => {
        this.setState({isVisible: false});
    }

    render() {
        const radio_props = [
            {label: 'param1', value: 0},
            {label: 'param2', value: 1}
        ]
        return (
            <View style={styles.container}>
                <Button ref='button' onPress={this.showPopover}>你好</Button>
                <Button border full color='accent'>你好</Button>
                <Popover
                    isVisible={this.state.isVisible}
                    fromRect={this.state.buttonRect}
                    onClose={this.closePopover}>
                    <Text>I'm the content of this popover!</Text>
                </Popover>
                <InputField/>
                <RadioButtonRound
                    types={radio_props}
                    initialValue={0}
                    onPress={(value) => {
                        this.setState({value: value})
                    }}
                />
                <ProgressBar
                    progress={20}
                />
                <Grid>
                    <GridItem title="hello" value="world" />
                    <GridItem title="hello" value="world" />
                    <GridItem title="hello" value="world" />
                    <GridItem title="hello" value="world" />
                </Grid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        borderRadius: 4,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ccc',
        borderColor: '#333',
        borderWidth: 1,
    },
    buttonText: {}
});
