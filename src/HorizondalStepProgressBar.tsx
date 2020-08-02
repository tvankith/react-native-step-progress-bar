import { View, StyleSheet, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

import React from 'react';
import { Step } from 'react-native-step-progress-bar/src/Step';
import { StepProgressBarProps } from 'react-native-step-progress-bar/src/types';
import { Bar } from 'react-native-step-progress-bar/src/Bar';

const HorizondalStepProgressBar = (props: StepProgressBarProps) => {
    const barLength = props.barLength;
    const stepWidth = props.stepWidth;
    const stepHeight = props.stepHeight;
    const showLabel = true
    const itemCount = props.data.length
    const StepProgressBarWidth = (itemCount * stepWidth) + ((itemCount - 1) * barLength);
    return (
        <View style={[styles.flexrow, { width: StepProgressBarWidth }]}>
            {props.data.map((item, index) => {

                const label = item.label;

                let barThickeness = props.barThickeness ? props.barThickeness : 2

                let stepContainerStyle: StyleProp<ViewStyle> = {
                    display: 'flex',
                    alignItems: 'center',
                    width: barLength + stepWidth,
                    height: 'auto',
                }

                if (props.labelPosition === "TOP") {
                    stepContainerStyle.justifyContent = "flex-end"
                }

                let completedBarColor = props.completedBarColor;

                let activeStep = props.activeStep;

                const renderLabel = () => {

                    let labelTextStyle: TextStyle = props.labelTextStyle;

                    let labelContainerStyle: ViewStyle = { ...props.labelContainerStyle };

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

                    let stepContainer: StyleProp<ViewStyle> = {
                        maxHeight: stepHeight,
                    };

                    return (
                        <View style={stepContainer}>
                            {props.renderStep ?
                                <props.renderStep
                                    radius={stepHeight / 2}
                                    index={index}
                                    label={label}
                                    activeStep={activeStep}
                                    stepHeight={stepHeight}
                                    stepWidth={stepWidth}
                                    stepColor={props.stepColor}
                                />
                            : <Step
                                radius={stepHeight / 2}
                                index={index}
                                label={label}
                                activeStep={activeStep}
                                stepHeight={stepHeight}
                                stepWidth={stepWidth}
                                stepColor={props.stepColor}
                            />
                            }
                        </View>
                    )

                }

                const renderBar = () => {

                    let barContainerStyle: StyleProp<ViewStyle> = {
                        position: 'absolute',
                    }

                    barContainerStyle.left = stepWidth + barLength / 2;
                    barContainerStyle.height = stepHeight;
                    barContainerStyle.justifyContent = 'center';

                    if (props.labelPosition === "TOP") {
                        barContainerStyle.bottom = 0
                    }

                    return (
                        index !== props.data.length - 1 ?
                            <View style={[barContainerStyle]}>
                                <View style={{ maxWidth: barLength }}>
                                    {
                                        <Bar
                                            barColor={props.barColor}
                                            barThickeness={barThickeness}
                                            barLength={barLength}
                                            completedBarColor={completedBarColor}
                                            index={index}
                                            activeStep={activeStep}
                                        />
                                    }
                                </View>
                            </View>
                            : null
                    )
                }

                return (
                    <View style={[stepContainerStyle]}>
                        {
                            showLabel && props.labelPosition === "TOP" && renderLabel()
                        }
                        {
                            renderStep()
                        }
                        {
                            renderBar()
                        }
                        {
                            showLabel && (props.labelPosition === "BOTTOM" || props.labelPosition === undefined) && renderLabel()
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
    }
});


HorizondalStepProgressBar.defaultProps = {
    stepComponent: Step,
    barComponent: Bar,
    barLength: 60,
    labelTextStyle: {},
    labelContainerStyle: {},
    showLabel: false
};

export { HorizondalStepProgressBar }