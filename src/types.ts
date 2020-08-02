import { StyleProp } from "react-native";
import { TextStyle, ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheet";
import { FC, Component } from "react-native-step-progress-bar/node_modules/@types/react";

export type StepProps = {
    radius: number;
    index: number;
    label: string;
    activeStep: number;
    stepHeight: number;
    stepWidth: number;
    stepColor: string;
}

export interface BarProps  {
    barThickeness,
    barLength:number,
    activeStep:number,
    completedBarColor:string,
    index:number,
    barColor:string
}

export type Step = {
    label?: string;
    title?: string;
}

export type Steps = Step[];

export type StepProgressBarProps = {
    data: Steps,
    barLength: number;
    stepColor: string;
    barColor: string;
    stepComponent?: FC<StepProps>
    labelTextStyle: StyleProp<TextStyle>;
    barStyle?: StyleProp<ViewStyle>;
    barHeight?: number;
    labelPosition?: "TOP" | "BOTTOM";
    completedBarColor?: string;
    activeStep?: number;
    showLabel?: boolean;
    renderStep?: FC<BarProps>;
    labelContainerStyle?: StyleProp<ViewStyle>;
    stepWidth: number;
    stepHeight: number;
    barThickeness: number;
    renderLabel: FC;
    orientation: "horizondal" | "vertical"
}