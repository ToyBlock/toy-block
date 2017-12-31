import React, {
    PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';

import { vw } from '../../style/basic';

export default class MenuItem extends PureComponent {
    static propTypes = {
        image: PropTypes.number,
        onPress: PropTypes.func,
        selected: PropTypes.bool,
        redirectLink: PropTypes.string,
        selectionImage: PropTypes.number,
        text: PropTypes.string,
    }

    static defaultProps = {
        image: 0,
        onPress: () => {},
        selected: false,
        redirectLink: '',
        selectionImage: 0,
        text: '',
    }

    onPress = () => {
            this.props.onPress(this.props.redirectLink);
    }
    render = () => {
        const {
            text, image, style
        } = this.props;
        return (
            <TouchableHighlight
                style={styles.menuItem}
                onPress={this.onPress}
                underlayColor="#f1f1f1"
            >
                <View style={[styles.content, style]}>
                    <Image
                        style={styles.menuItemImage}
                        source={image}
                    />
                    <Text style={styles.menuItemText}>
                        {text}
                    </Text>
                    <Image
                        style={styles.menuItemEnterIcon}
                        source={require('../../assets/enter.png')}
                    />
                </View>


            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        height: 40,
        width: vw(100),
        paddingLeft: vw(4),
        backgroundColor: '#fff'
    },
    content: {
        flexDirection: 'row',
        width: vw(96),
        height: 39
    },
    menuItemImage: {
        height: 20,
        width: 20,
        marginTop:10,
        marginRight: vw(4),
    },
    menuItemEnterIcon: {
        position: 'absolute',
        right: vw(4),
        top: 10,
        height: 20,
        width: 20,
    },
    menuItemText: {
        lineHeight: 40,
        color: '#424242',
    },
})