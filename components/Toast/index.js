import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Animated,
    Dimensions,
    TouchableHighlight,
    Text,
    ViewPropTypes as RNViewPropTypes,
} from 'react-native'

const ViewPropTypes = RNViewPropTypes || View.propTypes;

import { vw } from '../../style/basic';

export const DURATION = {
    LENGTH_LONG: 2000,
    LENGTH_SHORT: 500,
    FOREVER: 0,
};

const {height, width} = Dimensions.get('window');

export default class Toast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: props.show,
            text: '',
            opacityValue: new Animated.Value(this.props.opacity),
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.show) {
            this.show()
        }else{
            this.close();
        }
    }

    show = (text, duration) => {
        this.duration = typeof duration === 'number' ? duration : DURATION.LENGTH_SHORT;

        this.setState({
            isShow: true,
            text: text,
        });

        Animated.timing(
            this.state.opacityValue,
            {
                toValue: this.props.opacity,
                duration: this.props.fadeInDuration,
            }
        ).start(() => {
            this.isShow = true;
        });
    }

    close = ( duration ) => {
        let delay = typeof duration === 'undefined' ? this.duration : duration;

        if(delay === DURATION.FOREVER) delay = this.props.defaultCloseDelay || 250;

        if (!this.isShow && !this.state.isShow) return;
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            Animated.timing(
                this.state.opacityValue,
                {
                    toValue: 0.0,
                    duration: this.props.fadeOutDuration,
                }
            ).start(() => {
                this.setState({
                    isShow: false,
                });
                this.isShow = false;
            });
        }, delay);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    renderButton(text, style = {}, onClick) {
        return(
            <TouchableHighlight
                style={style}
                onPress={onClick}>
                <Text>{text}</Text>
            </TouchableHighlight>
        )
    }

    render() {

        let { onEnsure, onClose } = this.props;


        const view = this.state.isShow ?
            <View
                style={[styles.container]}
                pointerEvents="none"
            >
                <Animated.View
                    style={[styles.content, { opacity: this.state.opacityValue }, this.props.style]}
                >
                    <Text style={this.props.textStyle}>{this.state.text}</Text>
                    <View style={styles.btnGroup}>
                        {
                            this.renderButton('取消', styles.btn , onClose)
                        }
                        {
                            this.renderButton('确认',  styles.btn, onEnsure)
                        }

                    </View>
                </Animated.View>
            </View> : null;
        return view;
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: height /2,
        elevation: 999,
        alignItems: 'center',
        zIndex: 10000,
    },
    content: {
        width: vw(50),
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        borderWidth: 2,
        borderColor: '#e0e0e0'
    },
    text: {
        color: '#424242'
    },
    btnGroup: {
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    btn: {

    },
    btnEnsure: {
        marginLeft: 20
    }
});

Toast.propTypes = {
    style: ViewPropTypes.style,
    position: PropTypes.oneOf([
        'top',
        'center',
        'bottom',
    ]),
    textStyle: Text.propTypes.style,
    positionValue:PropTypes.number,
    fadeInDuration:PropTypes.number,
    fadeOutDuration:PropTypes.number,
    opacity:PropTypes.number,
    show: PropTypes.bool,
}

Toast.defaultProps = {
    position: 'bottom',
    textStyle: styles.text,
    positionValue: 120,
    fadeInDuration: 500,
    fadeOutDuration: 500,
    opacity: 1,
    show: false
}