import { StyleProp, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheet";
import { BarProps } from "react-native-step-progress-bar/src/types";
import React from 'react';

export const Bar = (props: BarProps) => {
    const {  barThickeness, barLength, activeStep, completedBarColor, index,barColor } = props
    let barStyle: StyleProp<ViewStyle> = {
        backgroundColor: barColor,
        height: barThickeness,
        width: barLength,
    };

    if (activeStep && completedBarColor && index <= (activeStep - 1)) {
        barStyle.backgroundColor = completedBarColor
    }
    return <View style={barStyle}></View>
}