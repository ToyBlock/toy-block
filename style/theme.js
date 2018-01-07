import { vw } from '../util';
import { PixelRatio, Platform, DeviceInfo, Dimensions, StatusBar, NativeModules } from 'react-native';

import COLORS from './colors';

const defaultColor = COLORS.white;
const primary = COLORS.volcano;
const secondary = COLORS.cyan;
const black = COLORS.greyEight;
const warning = COLORS.yellow;
const danger = COLORS.red;
const info = COLORS.blue;
const borderColor = COLORS.greyFive;
const dark = COLORS.greyNine;
const gray = COLORS.greyFour;
const fontColor = COLORS.darkFontColor;

const disabledOpacity = 0.65;

const pixelSize = (function() {
    let pixelRatio = PixelRatio.get();
    if (pixelRatio >= 3) return 0.333;
    else if (pixelRatio >= 2) return 0.5;
    else return 1;
})();

const X_WIDTH = 375;
const X_HEIGHT = 812;
const PAD_WIDTH = 768;
const PAD_HEIGHT = 1024;

const {width: D_WIDTH, height: D_HEIGHT} = Dimensions.get('window');

const { PlatformConstants = {} } = NativeModules;
const { minor = 0 } = PlatformConstants.reactNativeVersion || {};

const isIPhoneX = (() => {
    if (Platform.OS === 'web') return false;
    if (minor >= 50) {
        return DeviceInfo.isIPhoneX_deprecated;
    }
    return (
        Platform.OS === 'ios'
        && ( (D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH)
            || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
    );
})();


export default {
    primary: primary,
    secondary: secondary,
    black: black,
    light: defaultColor,
    borderColor: borderColor,
    gray: gray,
    fontColor: fontColor,
    dark: dark,
    warnColor: warning,
    dangerColor: danger,
    infoColor: info,
    bigTitleSize: 34,
    titleSize: 17,
    fontSize: 14,
    descSize: 11,
    screenColor: COLORS.greySencond,


    //Button - background color
    btnColor: defaultColor,
    btnPrimaryColor: primary,
    btnSecondaryColor: secondary,
    btnDarkColor: dark,
    btnDangerColor: danger,
    btnLinkColor: COLORS.opacity,
    //Button - title color
    btnTitleColor: primary,
    btnPrimaryTitleColor: defaultColor,
    btnSecondaryTitleColor: defaultColor,
    btnDangerTitleColor: defaultColor,
    btnDarkTitleColor: defaultColor,
    btnLinkTitleColor: primary,
    //Button - border color
    btnBorderColor: primary,
    btnPrimaryBorderColor: primary,
    btnSecondaryBorderColor: secondary,
    btnDangerBorderColor: danger,
    btnDarkBorderColor: dark,
    btnLinkBorderColor: COLORS.opacity,
    //Button - border width
    btnBorderWidth: 1,
    btnFullWidth: vw(98),
    //Button - border radius
    btnCircleRadius: 100,
    btnBorderRadiusLG: 6,
    btnBorderRadiusMD: 4,
    btnBorderRadiusSM: 3,
    //Button - font size
    btnFontSizeLG: 22,
    btnFontSizeMD: 15,
    btnFontSizeSM: 11,
    //Button - padding vertical
    btnPaddingVerticalLG: 8,
    btnPaddingVerticalMD: 6,
    btnPaddingVerticalSM: 4,
    //Button - padding horizontal
    btnPaddingHorizontalLG: 16,
    btnPaddingHorizontalMD: 12,
    btnPaddingHorizontalSM: 8,
    //Button - disabled opacity
    btnDisabledOpacity: disabledOpacity,

    //Badge
    badgeSize: 18,
    badgeDotSize: 6,
    badgePadding: 5,
    badgeColor: primary,
    badgeBorderColor: borderColor,
    badgeBorderWidth: 0,
    badgeTextColor: COLORS.greyFirst,
    badgeFontSize: 11,

    //Wheel
    wheelColor: defaultColor,
    wheelFontSize: 14,
    wheelTextColor: fontColor,
    wheelHoleHeight: 28,
    wheelHoleLineWidth: pixelSize,
    wheelHoleLineColor: borderColor,
    wheelMaskColor: defaultColor,
    wheelMaskOpacity: 0.4,

    //Toast
    toastColor: dark,
    toastPaddingLeft: 12,
    toastPaddingRight: 12,
    toastPaddingTop: 8,
    toastPaddingBottom: 8,
    toastBorderRadius: 4,
    toastIconTintColor: borderColor,
    toastIconWidth: 40,
    toastIconHeight: 40,
    toastIconPaddingTop: 8,
    toastIconPaddingBottom: 8,
    toastTextColor: borderColor,
    toastFontSize: 15,
    toastScreenPaddingLeft: 40,
    toastScreenPaddingRight: 40,
    toastScreenPaddingTop: 100,
    toastScreenPaddingBottom: 80,


    //Menu
    menuColor: dark,
    menuShadowColor: COLORS.greyFive,
    menuDirectionInsets: 4,
    menuItemColor: COLORS.opacity,
    menuItemPaddingLeft: 16,
    menuItemPaddingRight: 16,
    menuItemPaddingTop: 12,
    menuItemPaddingBottom: 12,
    menuItemTitleColor: COLORS.greySix,
    menuItemFontSize: 14,
    menuItemSeparatorWidth: pixelSize,
    menuItemSeparatorColor: COLORS.greySix,
    menuItemIconWidth: 16,
    menuItemIconHeight: 16,
    menuItemIconColor: COLORS.greyThird,
    menuItemIconPaddingRight: 12,

    //Checkbox
    cbTitleColor: fontColor,
    cbFontSizeLG: 20,
    cbFontSizeMD: 14,
    cbFontSizeSM: 10,
    cbTitlePaddingLeftLG: 8,
    cbTitlePaddingLeftMD: 6,
    cbTitlePaddingLeftSM: 4,
    cbCheckedTintColor: info,
    cbUncheckedTintColor: COLORS.greyThird,
    cbIconSizeLG: 24,
    cbIconSizeMD: 16,
    cbIconSizeSM: 10,
    cbDisabledOpacity: disabledOpacity,

    //Input
    inputWidth: vw(80),
    inputColor: defaultColor,
    inputTextColor: fontColor,
    inputPlaceholderTextColor: COLORS.greyFive,
    inputBorderColor: borderColor,
    inputBorderWidth: 1,
    //Input - border radius
    inputBorderRadiusLG: 6,
    inputBorderRadiusMD: 4,
    inputBorderRadiusSM: 3,
    //Input - font size
    inputFontSizeLG: 18,
    inputFontSizeMD: 14,
    inputFontSizeSM: 12,
    //Input - padding vertical
    inputPaddingVerticalLG: 8,
    inputPaddingVerticalMD: 6,
    inputPaddingVerticalSM: 5,
    //Input - padding horizontal
    inputPaddingHorizontalLG: 16,
    inputPaddingHorizontalMD: 12,
    inputPaddingHorizontalSM: 10,
    //Input - height
    inputHeightLG: 46,
    inputHeightMD: 34,
    inputHeightSM: 30,
    //Input - disabled opacity
    inputDisabledOpacity: disabledOpacity,

    //SearchInput
    siColor: defaultColor,
    siTextColor: fontColor,
    siPlaceholderTextColor: COLORS.darkestFontColor,
    siBorderColor: borderColor,
    siBorderWidth: 1,
    siBorderRadius: 3,
    siFontSize: 13,
    siPaddingVertical: 4,
    siPaddingHorizontal: 6,
    siHeight: 28,
    siIconSize: 12,
    siDisabledOpacity: 0.65,

    //ActionSheet
    asItemDisabledOpacity: 0.65,
    asItemMinHeight: 53,
    asItemPaddingLeft: 12,
    asItemPaddingRight: 12,
    asItemPaddingTop: 8,
    asItemPaddingBottom: 8,
    asItemColor: COLORS.lighterFontColor,
    asItemSeparatorColor: COLORS.greySix,
    asItemSeparatorLineWidth: pixelSize,
    asItemTitleColor: COLORS.defaultFontColor,
    asItemTitleAlign: 'center',
    asItemFontSize: 19,
    asCancelItemColor: COLORS.lighterFontColor,
    asCancelItemSeparatorColor: COLORS.greySix,
    asCancelItemSeparatorLineWidth: 7,
    asCancelItemTitleColor: fontColor,
    asCancelItemTitleAlign: 'center',
    asCancelItemFontSize: 19,

    //Popover
    popoverColor: defaultColor,
    popoverBorderColor: borderColor,
    popoverBorderRadius: 4,
    popoverBorderWidth: pixelSize,
    popoverPaddingCorner: 8,

    //Overlay
    overlayOpacity: 0.4,
    overlayRootScale: 0.93,

    //Label - color
    labelTextColor: fontColor,
    labelTextTitleColor: COLORS.defaultFontColor,
    labelTextDetailColor: COLORS.darkestFontColor,
    labelTextDangerColor: COLORS.red,
    //Label - font size
    labelFontSizeXL: 26,
    labelFontSizeLG: 20,
    labelFontSizeMD: 14,
    labelFontSizeSM: 10,
    labelFontSizeXS: 8,
    labelTitleScale: 1.1, //29, 22, 15, 11, 9
    labelDetailScale: 0.9, //23, 18, 13, 9, 7
    labelDangerScale: 1,

    //ListRow
    rowColor: defaultColor,
    rowMinHeight: 44,
    rowPaddingLeft: 12,
    rowPaddingRight: 12,
    rowPaddingTop: 8,
    rowPaddingBottom: 8,
    rowIconWidth: 20,
    rowIconHeight: 20,
    rowIconPaddingRight: 12,
    rowAccessoryWidth: 10,
    rowAccessoryHeight: 10,
    rowAccessoryPaddingLeft: 8,
    rowAccessoryCheckColor: COLORS.blue,
    rowAccessoryIndicatorColor: COLORS.greyFive,
    rowSeparatorColor: COLORS.greyFour,
    rowSeparatorLineWidth: pixelSize,
    rowPaddingTitleDetail: 4,
    rowDetailLineHeight: 18,
    rowActionButtonColor: COLORS.greyFive,
    rowActionButtonDangerColor: danger,
    rowActionButtonTitleColor: COLORS.greyFirst,
    rowActionButtonDangerTitleColor: COLORS.greyFirst,
    rowActionButtonTitleFontSize: 15,
    rowActionButtonPaddingHorizontal: 12,

    //PullPicker
    pupColor: COLORS.greySencond,
    pupMaxHeight: 258,
    pupHeaderColor: defaultColor,
    pupHeaderPaddingLeft: 12,
    pupHeaderPaddingRight: 12,
    pupHeaderPaddingTop: 12,
    pupHeaderPaddingBottom: 12,
    pupHeaderTitleColor: COLORS.greyTen,
    pupHeaderFontSize: 16,
    pupHeaderFontWeight: 'bold',
    pupHeaderSeparatorColor: COLORS.greyThird,
    pupHeaderSeparatorHeight: 8,
    pupItemColor: defaultColor,
    pupSeparatorColor: COLORS.greyFive,

    //PopoverPicker
    poppColor: COLORS.greyThird,
    poppShadowColor: COLORS.greyNine,
    poppMinWidth: 120,
    poppMaxWidth: 260,
    poppMinHeight: 44,
    poppMaxHeight: 246,
    poppDirectionInsets: 4,
    poppItemColor: defaultColor,
    poppItemPaddingLeft: 12,
    poppItemPaddingRight: 12,
    poppItemPaddingTop: 8,
    poppItemPaddingBottom: 8,
    poppItemTitleColor: fontColor,
    poppItemFontSize: 14,
    poppItemSeparatorWidth: pixelSize,
    poppItemSeparatorColor: COLORS.greyFive,
    poppAccessoryWidth: 10,
    poppAccessoryHeight: 10,
    poppAccessoryPaddingLeft: 8,
    poppAccessoryCheckColor: COLORS.blue,

    //Carousel
    carouselDotSize: 9,
    carouselDotUseSize: 16,
    carouselDotColor: COLORS.ligntestFontColor,
    carouselActiveDotColor: COLORS.lighterFontColor,

    //SegmentedBar
    sbColor: defaultColor,
    sbHeight: 40,
    sbBtnPaddingTop: 8,
    sbBtnPaddingBottom: 8,
    sbBtnPaddingLeft: 8,
    sbBtnPaddingRight: 8,
    sbBtnTitleColor: COLORS.greySeven,
    sbBtnTextFontSize: 13,
    sbBtnActiveTitleColor: primary,
    sbBtnActiveTextFontSize: 13,
    sbIndicatorLineColor: primary,
    sbIndicatorLineWidth: 2,
    sbIndicatorPositionPadding: 0,

    //Stepper
    stepperColor: defaultColor,
    stepperBorderColor: borderColor,
    stepperBorderWidth: 1,
    stepperBorderRadius: 2,
    stepperTextColor: fontColor,
    stepperFontSize: 13,
    stepperBtnTextColor: fontColor,
    stepperBtnFontSize: 13,
    stepperValueMinWidth: 40,
    stepperValuePaddingHorizontal: 8,
    stepperButtonWidth: 20,
    stepperButtonHeight: 20,
    stepperDisabledOpacity: 0.35,

    //Select
    selectColor: defaultColor,
    selectTextColor: fontColor,
    selectPlaceholderTextColor: COLORS.darkestFontColor,
    selectBorderColor: borderColor,
    selectBorderWidth: 1,
    //Select - border radius
    selectBorderRadiusLG: 6,
    selectBorderRadiusMD: 4,
    selectBorderRadiusSM: 3,
    //Select - font size
    selectFontSizeLG: 18,
    selectFontSizeMD: 14,
    selectFontSizeSM: 12,
    //Select - padding vertical
    selectPaddingTopLG: 8,
    selectPaddingTopMD: 6,
    selectPaddingTopSM: 5,
    selectPaddingBottomLG: 8,
    selectPaddingBottomMD: 6,
    selectPaddingBottomSM: 5,
    //Select - padding horizontal
    selectPaddingLeftLG: 16,
    selectPaddingLeftMD: 12,
    selectPaddingLeftSM: 10,
    selectPaddingRightLG: 26, //include icon size
    selectPaddingRightMD: 20, //include icon size
    selectPaddingRightSM: 16, //include icon size
    //Select - height
    selectHeightLG: 46,
    selectHeightMD: 34,
    selectHeightSM: 30,
    //Select - icon
    selectIconSizeLG: 20,
    selectIconSizeMD: 15,
    selectIconSizeSM: 12,
    selectIconTintColor: COLORS.greyEight,
    //Select - disabled opacity
    selectDisabledOpacity: 0.65,

    //TabView
    tvBarColor: COLORS.greySencond,
    tvBarHeight: 49,
    tvBarPaddingTop: 2,
    tvBarPaddingBottom: 2,
    tvBarSeparatorWidth: pixelSize,
    tvBarSeparatorColor: COLORS.greyFive,
    tvBarBtnWidth: 44,
    tvBarBtnIconSize: 22,
    tvBarBtnIconTintColor: COLORS.greySix,
    tvBarBtnIconActiveTintColor: primary,
    tvBarBtnTitleColor: COLORS.greySix,
    tvBarBtnTextFontSize: 10,
    tvBarBtnActiveTitleColor: primary,
    tvBarBtnActiveTextFontSize: 10,

    isIPhoneX: isIPhoneX,
    fitIPhoneX: false,

    get statusBarHeight() {
        if (Platform.OS === 'ios') {
            if (this.isIPhoneX) return this.isLandscape ? 0 : (this.fitIPhoneX ? 44 : 20);
            if (this.isPad) return 20;
        } else if (Platform.OS === 'android') {
            if (Platform.Version > 20) return StatusBar.currentHeight; //translucent StatusBar is required
            return 0;
        }
        return this.isLandscape ? 0 : 20;
    },

    get screenInset() {
        let isLandscape = this.isLandscape;
        let isIPhoneX = this.isIPhoneX;
        let fitIPhoneX = this.fitIPhoneX;
        return ({
            left: isLandscape && isIPhoneX && fitIPhoneX ? 44 : 0,
            right: isLandscape && isIPhoneX && fitIPhoneX ? 44 : 0,
            top: this.statusBarHeight,
            bottom: isIPhoneX && fitIPhoneX ? (isLandscape ? 24 : 34) : 0,
        });
    },
}