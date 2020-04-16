//@flow
import { View, StyleSheet, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

import React from 'react';

export type Step = {
    label?: string;
    title?: string;
}

export type Steps = Step[];

export type StepProgressBarProps = {
    data: Steps,
    radius: number;
    barLength: number;
    stepColor: string;
    barColor: string;
    stepComponent?: ({ index: number, label: string }) => React$Node;
    labelTextStyle: StyleProp<TextStyle>;
    barStyle?: StyleProp<ViewStyle>;
    barHeight?: number;
    labelPosition?: "TOP" | "BOTTOM";
    labelTextColor?: string;
    completedBarColor?: string;
    activeStep?: number;
    showLabel?: boolean;
    barComponent?: ({ index: number }) => React$Node;
    labelContainerStyle?: StyleProp<ViewStyle>;
    stepWidth: number;
    stepHeight: number;
}

type CircleStepProps = {
    borderWidth: number;
    borderColor: string;
    borderRadius?: number;
}

export const StepProgressBar = (props: StepProgressBarProps) => {
    const radius: number = props.radius ? props.radius : 40;
    const barLength = props.barLength ? props.barLength : 60;
    const activeStep = props.activeStep;
    const stepWidth = props.stepWidth;
    const stepHeight = props.stepHeight;
    console.dir(props.stepComponent)
    return (
        <View style={[styles.flexrow]}>
            {props.data.map((item, index) => {

                const title = item.title;

                const label = item.label;

                let barHeight = props.barHeight ? props.barHeight : stepHeight / 21

                let stepContainerStyle: StyleProp<ViewStyle> = { ...styles.flexcol, alignItems: 'center', width: barLength + stepWidth, height: 'auto' }

                if (props.labelPosition === "TOP") {
                    stepContainerStyle.justifyContent = "flex-end"
                }

                let completedBarColor = props.completedBarColor;

                let activeStep = props.activeStep;

                const renderLabel = () => {

                    let labelTextStyle: StyleProp<TextStyle>;

                    let labelContainerStyle: StyleProp<ViewStyle>

                    labelTextStyle = { ...props.labelTextStyle }

                    if (props.labelTextColor) {
                        labelTextStyle.color = props.labelTextColor
                    }

                    if (props.labelContainerStyle) {
                        labelContainerStyle = props.labelContainerStyle
                    }

                    return (
                        <>
                            {
                                props.showLabel === true &&
                                <View style={labelContainerStyle}>
                                    <Text style={labelTextStyle}>{item.label}</Text>
                                </View>
                            }
                        </>
                    )
                }

                const renderStep = () => {

                    let stepStyle: StyleProp<ViewStyle> = { ...styles.step };

                    let stepContainer: StyleProp<ViewStyle> = {
                        maxHeight: stepHeight,
                        maxWidth: stepWidth
                    };


                    if (radius) {
                        stepStyle.height = stepHeight;
                        stepStyle.width = stepWidth;
                        stepStyle.borderRadius = stepHeight / 2;
                    }

                    if (props.stepColor) {
                        stepStyle.backgroundColor = props.stepColor;
                    }

                    return (
                        <View style={stepContainer}>
                            {props.stepComponent ?
                                <props.stepComponent
                                    radius={stepHeight / 2}
                                    index={index}
                                    label={label}
                                    activeStep={activeStep} />
                                :
                                <View style={stepStyle}></View>}
                        </View>
                    )

                }

                const defaultBar = () => {
                    let barStyle: StyleProp<ViewStyle> = {
                        backgroundColor: props.barColor,
                        height: barHeight,
                        width: barLength,
                        ...props.barStyle
                    };

                    if (activeStep && completedBarColor && index <= activeStep - 1) {
                        barStyle.backgroundColor = completedBarColor
                    }
                    return <View style={barStyle}></View>
                }

                const renderBar = () => {

                    let barContainerStyle: StyleProp<ViewStyle> = {
                        position: 'absolute',
                        left: stepWidth + barLength / 2,
                        height: stepHeight,
                        width: barLength,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }

                    let customBarContainer = { top: stepWidth / 2 }

                    if (props.labelPosition === "TOP") {
                        barContainerStyle.bottom = 0
                    }

                    return (
                        index !== props.data.length - 1 ?
                            <View style={barContainerStyle}>
                                {
                                    props.barComponent
                                        ?
                                        <View style={{ maxWidth: barLength }}>
                                            <props.barComponent
                                                index={index}
                                                activeStep={activeStep}
                                            />
                                        </View>
                                        :
                                        defaultBar()
                                }
                            </View>
                            : null
                    )
                }

                return (
                    <View style={[stepContainerStyle]}>
                        {
                            props.labelPosition === "TOP" && renderLabel()
                        }
                        {
                            renderStep()
                        }
                        {
                            renderBar()
                        }
                        {
                            (props.labelPosition === "BOTTOM" || props.labelPosition === undefined) && renderLabel()
                        }
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    flexrow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexcol: {
        display: 'flex',
        flexDirection: 'column'
    },
    step: {
        borderRadius: 40,
        width: 40,
        height: 40,
    }
})
