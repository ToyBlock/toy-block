import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

import { basic, colors } from '../../style/basic';

const loadingIcon = require('../../assets/Spinner.gif');

//TODO: 覆盖所有元素

class Loading extends Component {
    static propTypes = {
        message: PropTypes.string,
    }

    static defaultProps = {
        message: 'loading',
    }

    render = () => (
        <View style={styles.container}>
            <Image style={styles.loading} source={loadingIcon} />
            <Text style={[styles.title]}>
                {this.props.message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#F2F6FE',
    },
    title: {
        fontSize: basic.headerFontSize,
        marginBottom: 20,
        color: colors.accent,
        textAlign: 'center',
    },
    loading: {
        height: 75,
        width: 75,
        alignSelf: 'center',
    }

    })


export default Loading;

