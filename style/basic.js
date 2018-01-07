import { Platform, Dimensions } from 'react-native';

export const flexCenter = {alignItems: 'center', justifyContent: 'center'};

export const colors = {
    primary: '#e14c46',
    accent: '#5e6670',
    green: '#00b39e'
}

export const basic = Platform.select({
    ios: {
        headerFontSize: 22,
        extraMarginValue: 30,
        buttonPrimaryTextPadding: 5,
        buttonBorderedTextPadding: 5
    },
    android: {
        headerFontSize: 19,
        extraMarginValue: 25,
        buttonPrimaryTextPadding: 0,
        buttonBorderedTextPadding: 3
    }
});

export function vw(percentageWidth) {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

const MARGIN = vw(1);

export function computedSpace(col) {
    return ((col + 1) / col) * MARGIN
}

export const baseStyles = {
    border: '#e0e0e0',
    gray: '#e0e0e0',
    fontColor: '#424242',
    dark: '#616161',
    headerFontSize: 34,
    titleFontSize: 17,
    textFontSize: 14,
    descFontSize: 11
}

