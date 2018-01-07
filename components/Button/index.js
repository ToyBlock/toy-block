// Button.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Theme from '../../style/theme';

export default class Button extends TouchableOpacity {

    static propTypes = {
        ...TouchableOpacity.propTypes,
        type: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'link', 'dark']),
        size: PropTypes.oneOf(['lg', 'md', 'sm']),
        title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
        titleStyle: Text.propTypes.style,
        shape: PropTypes.oneOf(['full', 'circle', 'normal'])
    };

    static defaultProps = {
        ...TouchableOpacity.defaultProps,
        type: 'default',
        size: 'md',
        shape: 'normal'
    };

    buildProps() {
        let {style, type, size, shape, title, titleStyle, activeOpacity, disabled, children, ...others} = this.props;

        let backgroundColor, borderColor, borderWidth, borderRadius, paddingVertical, paddingHorizontal;
        let textColor, textFontSize, width;
        switch (type) {
            case 'primary':
                backgroundColor = Theme.btnPrimaryColor;
                borderColor = Theme.btnPrimaryBorderColor;
                textColor = Theme.btnPrimaryTitleColor;
                break;
            case 'secondary':
                backgroundColor = Theme.btnSecondaryColor;
                borderColor = Theme.btnSecondaryBorderColor;
                textColor = Theme.btnSecondaryTitleColor;
                break;
            case 'danger':
                backgroundColor = Theme.btnDangerColor;
                borderColor = Theme.btnDangerBorderColor;
                textColor = Theme.btnDangerTitleColor;
                break;
            case 'link':
                backgroundColor = Theme.btnLinkColor;
                borderColor = Theme.btnLinkBorderColor;
                textColor = Theme.btnLinkTitleColor;
                break;
            case 'dark':
                backgroundColor = Theme.btnDarkColor;
                borderColor = Theme.btnDarkBorderColor;
                textColor = Theme.btnDarkTitleColor;
                break;
            default:
                backgroundColor = Theme.btnColor;
                borderColor = Theme.btnBorderColor;
                textColor = Theme.btnTitleColor;
        }
        switch (size) {
            case 'lg':
                borderRadius = Theme.btnBorderRadiusLG;
                paddingVertical = Theme.btnPaddingVerticalLG;
                paddingHorizontal = Theme.btnPaddingHorizontalLG;
                textFontSize = Theme.btnFontSizeLG;
                break;
            case 'sm':
                borderRadius = Theme.btnBorderRadiusSM;
                paddingVertical = Theme.btnPaddingVerticalSM;
                paddingHorizontal = Theme.btnPaddingHorizontalSM;
                textFontSize = Theme.btnFontSizeSM;
                break;
            default:
                borderRadius = Theme.btnBorderRadiusMD;
                paddingVertical = Theme.btnPaddingVerticalMD;
                paddingHorizontal = Theme.btnPaddingHorizontalMD;
                textFontSize = Theme.btnFontSizeMD;
        }

        switch (shape) {
            case 'full':
                width = Theme.btnFullWidth;
                break;
            case 'circle':
                borderRadius = Theme.btnCircleRadius;
                paddingHorizontal = paddingVertical;

                break;
            default:

        }
        borderWidth = Theme.btnBorderWidth;

        style = [{
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }].concat(style);
        if(width){
            style[0].width = width;
        }
        style = StyleSheet.flatten(style);
        if (disabled) {
            style.opacity = Theme.btnDisabledOpacity;
        }
        this.state.anim._value = style.opacity === undefined ? 1 : style.opacity;

        if (!React.isValidElement(title) && (title || title === '' || title === 0)) {
            titleStyle = [{
                color: textColor,
                fontSize: textFontSize,
                overflow: 'hidden',
            }].concat(titleStyle);
            title = <Text style={titleStyle} numberOfLines={1}>{title}</Text>;
        }
        if (title) children = title;

        this.props = {style, type, size, title, titleStyle, activeOpacity, disabled, children, ...others};
    }

    render() {
        this.buildProps();
        return super.render();
    }
}
