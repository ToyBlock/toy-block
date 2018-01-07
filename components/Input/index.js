// Input.js

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

import Theme from '../../style/theme';

export default class Input extends TextInput {

    static propTypes = {
        ...TextInput.propTypes,
        size: PropTypes.oneOf(['lg', 'md', 'sm']),
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    };

    static defaultProps = {
        ...TextInput.defaultProps,
        size: 'md',
        disabled: false,
        underlineColorAndroid: 'rgba(0, 0, 0, 0)',
        onChange: () => {}
    };

    buildProps = () => {
        let {style, size, disabled, placeholderTextColor, pointerEvents, onChange, opacity, ...others} = this.props;

        let borderRadius, fontSize, paddingVertical, paddingHorizontal, height, onChangeText;
        switch (size) {
            case 'lg':
                borderRadius = Theme.inputBorderRadiusLG;
                fontSize = Theme.inputFontSizeLG;
                paddingVertical = Theme.inputPaddingVerticalLG;
                paddingHorizontal = Theme.inputPaddingHorizontalLG;
                height = Theme.inputHeightLG;
                break;
            case 'sm':
                borderRadius = Theme.inputBorderRadiusSM;
                fontSize = Theme.inputFontSizeSM;
                paddingVertical = Theme.inputPaddingVerticalSM;
                paddingHorizontal = Theme.inputPaddingHorizontalSM;
                height = Theme.inputHeightSM;
                break;
            default:
                borderRadius = Theme.inputBorderRadiusMD;
                fontSize = Theme.inputFontSizeMD;
                paddingVertical = Theme.inputPaddingVerticalMD;
                paddingHorizontal = Theme.inputPaddingHorizontalMD;
                height = Theme.inputHeightMD;
        }
        style = [{
            backgroundColor: Theme.inputColor,
            color: Theme.inputTextColor,
            borderColor: Theme.inputBorderColor,
            borderWidth: Theme.inputBorderWidth,
            borderRadius: borderRadius,
            fontSize: fontSize,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            height: height,
            width: Theme.inputWidth,
        }].concat(style);

        if (!placeholderTextColor) placeholderTextColor = Theme.inputPlaceholderTextColor;
        if (disabled) {
            pointerEvents = 'none';
            opacity = Theme.inputDisabledOpacity;
        }
        onChangeText = onChange;

        this.props = {style, size, disabled, placeholderTextColor, pointerEvents, opacity, onChangeText, ...others};
    }

    render() {
        this.buildProps();
        return super.render();
    }

}
