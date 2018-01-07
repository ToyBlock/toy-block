import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

import { vw, computedSpace } from '../../style/basic';


class GridItem extends Component {
    static propTypes = {
        value: PropTypes.string,
        title: PropTypes.string,
        onPress: PropTypes.func
    }

    static defaultProps = {
        value: '',
        title: '',
        style: {},
        onPress: () => {}
    }
    render = () => {
        const { image, title, style, children, onPress } = this.props;

        console.log(title);

        return (
            <View style={[styles.item, style]} onPress={onPress}>
                {
                    children ? children : (
                        <View>
                            <Image style={styles.img} source={image} />
                            <Text style={styles.title}>
                                { title }
                            </Text>
                        </View>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        color: '#424242',
        fontSize: 14
    },
    img: {
        width: 40,
        height: 40

    }
})

export default GridItem;