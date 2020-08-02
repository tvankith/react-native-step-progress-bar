import { StyleProp, View } from "react-native";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheet";
import React from 'react';
import { StepProps } from "react-native-step-progress-bar/src/types";

export const Step = (props: StepProps) => {
    const { radius, stepColor, stepHeight, stepWidth } = props;
    let stepStyle: StyleProp<ViewStyle> = {
        borderRadius: 40,
        width: 40,
        height: 40,
    };

    if (radius) {
        stepStyle.height = stepHeight;
        stepStyle.width = stepWidth;
        stepStyle.borderRadius = stepHeight / 2;
    }

    if (stepColor) {
        stepStyle.backgroundColor = stepColor;
    }
    return (
        <View style={stepStyle}></View>
    )
}
