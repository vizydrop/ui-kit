const color = require(`color`);

// colors (!!! don't use them directly, use semantic variables) -
const defaultColorContent = `#000`;
const defaultColorContentInvert = `#fff`;
const defaultColorBody = `#fff`;
const defaultColorHighlight = `#a8e8a2`;
const defaultColorMain = `#007eff`;
const defaultColorError = `#d51b32`;
const defaultColorSuccess = `#87cf73`;

// pass OpenSans specially for TP and IE11.
const defaultFontFamily = `"Open Sans",OpenSans,sans-serif`;

function calculateVariables({
    /* base color */
    colorContent = defaultColorContent,
    colorContentInvert = defaultColorContentInvert,
    colorBody = defaultColorBody,
    colorHighlight = defaultColorHighlight,
    colorMain = defaultColorMain,
    colorError = defaultColorError,
    colorSuccess = defaultColorSuccess,
    /* fonts */
    fontFamily = defaultFontFamily,
} = {}) {
    const controlsHeightPx = 28;
    const spaceSPx = 8;
    const spaceXsPx = 4;
    const borderRadiusPx = 3;
    // SEMANTIC VARIABLES -----------------------------------
    // vzd Colors -------------------------------------------
    const colorVzdBrand = colorMain;
    const colorVzdBrandHover = color(colorVzdBrand).darken(0.1).toString(); // #0071e6
    // vzd fonts -------------------------------------------
    const fontSizeS = `11px`;
    const fontSizeM = `13px`;
    const fontSizeL = `16px`;
    const fontSizeXl = `22px`;
    const fontSizeXxl = `26px`;
    const fontWeightBold = `bold`;
    const fontWeightSemibold = `600`;
    const fontWeightRegular = `400`;
    const fontFamilyCode = `Roboto Mono, monospace`;
    // vzd text colors ---------------------------------------
    const textColor = colorContent;
    const textColorSecondary = color(colorContent).fade(0.4).toString(); // rgba(0, 0, 0, 0.6)
    const textColorTertiary = color(colorContent).fade(0.64).toString(); // rgba(0, 0, 0, 0.36)
    const textColorInvert = colorContentInvert; // #fff
    const linkColorDefault = colorVzdBrand; // #007eff
    const linkColorHover = colorVzdBrandHover; // #0071e6
    const textColorSuccess = colorSuccess; // #87cf73
    const textColorError = colorError; // #d51b32
    const textColorWarning = colorMain; // #007eff
    const textColorInfo = textColorSecondary; // rgba(0, 0, 0, 0.6)
    // vzd backgrounds ---------------------------------------
    const bgBody = colorBody; // #fff
    const bgBodyEndGradient = color(colorBody).fade(1).toString(); // transparent
    const bgVzdBrand = colorVzdBrand; // #007eff
    const bgVzdBrandLight = color(bgBody).mix(color(colorVzdBrand), 0.05).toString(); // #f2f9ff
    const bgPlain = colorHighlight; // #a8e8a2
    const bgPanel = color(colorBody).mix(color(colorContent), 0.025).toString(); // #f9f9f9
    const bgObject = color(colorBody).mix(color(colorContent), 0.06).toString(); // #f0f0f0
    const bgSelected = color(colorBody).mix(color(bgPlain), 0.7).toString(); // #c2efbe
    const bgHover = color(bgBody).mix(color(bgPlain), 0.3).toString(); // #e5f8e3
    const bgError = color(bgBody).mix(color(textColorError), 0.08).toString(); // #fcedef
    const bgErrorHover = color(bgBody).mix(color(textColorError), 0.12).toString(); // #fae4e6
    const bgWarning = color(bgBody).mix(color(textColorWarning), 0.08).toString(); // #ebf5ff
    const bgSuccess = color(bgBody).mix(color(textColorSuccess), 0.15).toString();
    const bgInfo = bgPanel; // #f9f9f9
    // vzd faded colors (for box-shadow for example) ---------------------------------
    const bgMainAlpha = color(colorMain).fade(0.9).toString();
    const bgErrorAlpha = color(colorError).fade(0.9).toString();
    // vzd spaces, breakpoints -------------------------------------------
    const spaceXxl = `48px`;
    const spaceXl = `32px`;
    const spaceLx = `24px`;
    const spaceL = `20px`;
    const spaceM = `16px`;
    const spaceSm = `12px`;
    const spaceS = `${spaceSPx}px`;
    const spaceXs = `${spaceXsPx}px`;
    const breakpointXl = `1920px`;
    const breakpointLx = `1440px`;
    const breakpointL = `1280px`;
    const breakpointM = `1000px`;
    const breakpointSm = `768px`;
    const breakpointS = `686px`;
    const breakpointXs = `320px`;
    // borders, border-radius ---------------------------------------------
    const borderRadius = `${borderRadiusPx}px`;
    const borderRadiusL = `6px`;
    const borderColor = color(colorContent).fade(0.92).toString(); // rgba(0, 0, 0, 0.08)
    const borderColorSecondary = color(colorContent).fade(0.96).toString(); // rgba(0, 0, 0, 0.04)
    // box-shadows --------------------------------------------------------
    const boxShadowXS = `0 3px 5px rgba(0, 0, 0, 0.05)`;
    const boxShadowS = `0 5px 6px rgba(0, 0, 0, 0.05)`;
    const boxShadowM = `0 5px 15px rgba(0, 0, 0, 0.07)`;
    const boxShadowL = `0 4px 20px rgba(0, 0, 0, 0.15)`;
    // icons --------------------------------------------------------------
    const iconSize = `16px`;
    const iconErrorColor = colorError; // #d51b32
    const iconColorInvert = colorContentInvert; // #fff
    const iconColorDefault = textColor; // #000
    const iconColorSecondary = textColorSecondary; // rgba(0, 0, 0, 0.6)
    const iconColorTertiary = textColorTertiary; // rgba(0, 0, 0, 0.36)
    const iconColorLight = color(colorContent).fade(0.92).toString(); // rgba(0, 0, 0, 0.08)
    const iconActionOpacity = `0.4`;
    // controls ------------------------------------------------------------
    const controlsBoxShadowFocus = `0 0 0 3px ${bgMainAlpha}`;
    const controlsBoxShadowFocusError = `0 0 0 3px ${bgErrorAlpha}`;
    const controlsDisabledOpacity = `0.3`;
    const controlsHeight = `${controlsHeightPx}px`;
    const controlsHeightL = `34px`;
    const controlsHeightXl = `42px`;
    const controlsLineHeight = `18px`;
    const controlsTextColor = textColor; // #000
    const controlsBg = bgBody; // #fff
    const controlsBorderRadius = borderRadius;
    const controlsBorderColor = color(colorContent).fade(0.84).toString(); // rgba(0, 0, 0, 0.16)
    const controlsBorderColorHover = color(colorContent).fade(0.82).toString(); // rgba(0, 0, 0, 0.18)
    const controlsBorderColorFocus = color(colorContent).fade(0.82).toString(); // rgba(0, 0, 0, 0.18)
    const controlsPlaceholderColor = color(colorContent).fade(0.6).toString(); // rgba(0, 0, 0, 0.4)
    const controlsHorizontalSpace = spaceXs;
    const controlsHorizontalSpaceL = spaceS;
    const controlsHorizontalSpaceXl = spaceL;
    // buttons --------------------------------------------------------------
    const buttonDefaultColor = textColor; // #000
    const buttonDefaultBackground = `transparent`;
    const buttonDefaultBorderColor = controlsBorderColor;
    const buttonDefaultHoverColor = textColor; // #000
    const buttonDefaultHoverBackground = bgObject;
    const buttonDefaultHoverBorderColor = controlsBorderColor;
    const buttonPrimaryColor = textColorInvert; // #fff
    const buttonPrimaryBackground = colorVzdBrand; // #007eff
    const buttonPrimaryBorderColor = colorVzdBrand;
    const buttonPrimaryHoverColor = textColorInvert; // #fff
    const buttonPrimaryHoverBackground = colorVzdBrandHover; // #0071e6
    const buttonPrimaryHoverBorderColor = colorVzdBrandHover;
    // popover -----------------------------------------------------------------
    const popoverBackground = bgBody; // #fff
    const popoverOverlay = color(bgBody).fade(0.25).toString(); // rgba(255, 255, 255, 0.75)
    const popoverBoxShadow = boxShadowL;
    // rest -----------------------------------------------------------------
    const chartLegendWidth = `182px`;
    const sourceFormWidth = `530px`;
    const customScrollWidth = `7px`;
    const axisControlColor = color(bgSelected).desaturate(0.08).darken(0.27).toString(); // #6fd366
    const progressIndicatorBg = colorVzdBrand; // #007eff
    const progressIndicatorFunc = `cubic-bezier(0.58, 0, 0.81, 1)`;
    const chartEditorAxisWidth = `${controlsHeightPx + spaceSPx * 2 + 2}px`;
    const templateMenuWidth = `70px`;
    return {
        controlsHeightPx,
        borderRadiusPx,
        spaceXsPx,
        colorContent,
        colorContentInvert,
        colorBody,
        colorMain,
        colorHighlight,
        colorError,
        colorSuccess,
        colorVzdBrand,
        colorVzdBrandHover,
        spaceXxl,
        spaceXl,
        spaceLx,
        spaceL,
        spaceM,
        spaceSm,
        spaceS,
        spaceSPx,
        spaceXs,
        fontFamily,
        fontFamilyCode,
        fontSizeS,
        fontSizeM,
        fontSizeL,
        fontSizeXl,
        fontSizeXxl,
        fontWeightBold,
        fontWeightSemibold,
        fontWeightRegular,
        textColor,
        textColorSecondary,
        textColorTertiary,
        textColorInvert,
        textColorSuccess,
        textColorError,
        textColorWarning,
        textColorInfo,
        linkColorDefault,
        linkColorHover,
        iconSize,
        iconColorDefault,
        iconColorSecondary,
        iconColorTertiary,
        iconColorInvert,
        iconErrorColor,
        iconColorLight,
        iconActionOpacity,
        bgBody,
        bgBodyEndGradient,
        bgVzdBrand,
        bgVzdBrandLight,
        bgPanel,
        bgObject,
        bgPlain,
        bgSelected,
        bgHover,
        bgSuccess,
        bgError,
        bgErrorHover,
        bgWarning,
        bgInfo,
        bgMainAlpha,
        bgErrorAlpha,
        breakpointXl,
        breakpointLx,
        breakpointL,
        breakpointM,
        breakpointSm,
        breakpointS,
        breakpointXs,
        borderRadius,
        borderRadiusL,
        borderColor,
        borderColorSecondary,
        boxShadowXS,
        boxShadowS,
        boxShadowM,
        boxShadowL,
        controlsTextColor,
        controlsBg,
        controlsBorderRadius,
        controlsBorderColor,
        controlsBorderColorHover,
        controlsBorderColorFocus,
        controlsPlaceholderColor,
        controlsHorizontalSpace,
        controlsHorizontalSpaceL,
        controlsHorizontalSpaceXl,
        controlsBoxShadowFocus,
        controlsBoxShadowFocusError,
        controlsDisabledOpacity,
        controlsHeight,
        controlsHeightL,
        controlsHeightXl,
        controlsLineHeight,
        buttonDefaultColor,
        buttonDefaultBackground,
        buttonDefaultBorderColor,
        buttonDefaultHoverColor,
        buttonDefaultHoverBackground,
        buttonDefaultHoverBorderColor,
        buttonPrimaryColor,
        buttonPrimaryBackground,
        buttonPrimaryBorderColor,
        buttonPrimaryHoverColor,
        buttonPrimaryHoverBackground,
        buttonPrimaryHoverBorderColor,
        popoverBoxShadow,
        popoverBackground,
        popoverOverlay,
        chartLegendWidth,
        sourceFormWidth,
        axisControlColor,
        progressIndicatorBg,
        progressIndicatorFunc,
        chartEditorAxisWidth,
        templateMenuWidth,
        customScrollWidth,
    };
}

function convertThemeToInternalConfig(theme) {
    const safeTheme = theme || {};
    return {
        ...safeTheme.colors,
        fontFamily: safeTheme.fontFamily,
    };
}

function calculateCustomCssProperties(options) {
    return Object.entries(calculateVariables(options))
        .map(([key, value]) => [`--vzdrp-${key}`, value])
        .reduce((customProperties, [key, value]) => ({...customProperties, [key]: value}), {});
}

module.exports = {
    defaultColorContent,
    defaultColorContentInvert,
    defaultColorBody,
    defaultColorHighlight,
    defaultColorMain,
    defaultColorError,
    defaultFontFamily,

    calculateVariables,
    calculateCustomCssProperties,
    calculateVariablesFromTheme(theme) {
        return calculateVariables(convertThemeToInternalConfig(theme));
    },
    calculateCustomCssPropertiesFromTheme(theme) {
        return calculateCustomCssProperties(convertThemeToInternalConfig(theme));
    },
};
