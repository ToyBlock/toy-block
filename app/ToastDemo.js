import React, {Component} from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Toast from '../components/Toast';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 'bottom',
            style:{},
        }
    }

    show = () => {
        this.setState({
            show: true,
        })
    }

    handleClose = () => {
        this.setState({
            show: false,
        })
    }

    getButton(text, position, duration,withStyle) {
        return(
            <TouchableHighlight
                style={{padding: 10}}
                onPress={this.show}>
                <Text>{text}</Text>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.getButton('点我')
                }
                <Toast
                    text="hello word"
                    show={this.state.show}
                    onClose={this.handleClose}
                    onEnsure={this.handleClose}
                />
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
});
