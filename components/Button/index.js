

import React, {Component} from 'react'
import PropTypes from 'prop-types';

import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    StyleSheet
} from 'react-native'

import {flexCenter, colors} from "../../style/basic";


function getBordered(color){
    return {
        borderColor: colors[color],
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#fff'
    }
}


/**
 * 按钮
 */
export default class Button extends Component{


    static propTypes = {
        color : PropTypes.oneOf([
            'primary',
            'accent',
        ]),
        size: PropTypes.string,
        shape: PropTypes.oneOf([
            'squared',
            'circle',
            'icon',
            'normal'
        ])
    }

    static defaultProps  = {
        loading : false,
        style: {},
        color: "primary",
        shape: 'normal',
        full: false,
        border: false
    }

    button = null;


    onPress = () => {
        this.props.onPress && this.props.onPress()
    }


    render(){

        // 从父组件接收属性
        const { children, loading, style, color, shape, full, border, ...others } = this.props;
        // const height = this.props.height

        let shapeStyle = styles[shape];
        let borderStyle = getBordered(color);
        let outerStyle = {
            borderRadius: 5,
            backgroundColor: colors[color],
            ...shapeStyle,
            ...flexCenter,
            ...style
        };
        let textStyle = {
            fontSize: 14,
            color : border ? colors[color] :'white'
        };

        if(border){
            Object.assign(outerStyle, borderStyle);
        }

        if(full){
            outerStyle.width = '96%';
        }


        if(Platform.OS === 'android'){
            Object.assign(outerStyle, {
                borderRadius: 0,

            })
            Object.assign(textStyle, {
                fontSize: textStyle.fontSize * 1.2,
                fontWeight: "bold"
            })
        }

        // Loading效果
        if(loading) {
            return (
                <View
                    style={outerStyle}>
                    <ActivityIndicator />
                </View>
            )
        }
        return(
            <TouchableOpacity
                onPress={this.onPress}
                style={outerStyle}
                ref={(el) => this.button = el }
                {...others}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        )
    }

}


const styles = {
    squared: {
        width: 100,
        height: 40,
    },
    normal: {
        width: 100,
        height: 40,
        borderRadius: 5
    },
    icon: {

    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 1000
    },
    border: {

    }
};



