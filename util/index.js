import { PixelRatio, Dimensions } from 'react-native';

/**
 * t
 */
export function getImage(width, height, name) {
    let trueWidth = PixelRatio.getPixelSizeForLayoutSize(width);

}

export function vw(percentageWidth) {
    return Dimensions.get('window').width * (percentageWidth / 100);
}