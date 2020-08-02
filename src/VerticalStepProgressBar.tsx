import { View, Text, StyleProp } from "react-native"
import React from 'react';
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheet";
import { StepProgressBarProps } from "react-native-step-progress-bar/src/types";

const Step = ({ width = 20, height = 20, stepBorderWidth = 10 }) => {
    const style: StyleProp<ViewStyle> = {
        width, height, backgroundColor: "green", borderRadius: stepBorderWidth,
    }
    return (
        <View style={style}></View>
    )
}


export const Bar = ({ barLength, barThickeness, stepWidth, stepHeight, barColor,completedBarColor,activeStep,index }) => {
    let barStyle: StyleProp<ViewStyle> = {
        backgroundColor: barColor,
        height: barLength,
        width: barThickeness,
        position: "absolute",
        left: stepWidth / 2 - barThickeness / 2,
        top: stepHeight 
    };

    if (activeStep && completedBarColor && index <= (activeStep - 1)) {
        barStyle.backgroundColor = completedBarColor
    }
    
    return (<View style={barStyle}></View>)

}

type DataItem = any

type renderLabelProps = {
    item:DataItem;
    index: number;
    labelTextStyle: StyleProp<ViewStyle>
}

type Props = {
    barLength: number;
    stepWidth: number;
    stepHeight: number;
    data: Array<any>;
    renderStep: React.FunctionComponent;
    renderLabel: React.ComponentType<renderLabelProps>;
    barThickeness: number;
    stepBorderWidth: number;
    barColor:string;
    labelTextStyle: StyleProp<ViewStyle>;
    completedBarColor: string;
    activeStep: boolean;
    orientation:"vertical" | "horizondal";
}

const VerticalStepProgressBar = (props:StepProgressBarProps) => {
    const barLength = props.barLength || 40
    const stepWidth = props.stepWidth || 20
    const stepHeight = props.stepHeight || 20
    const data = props.data
    const RenderStep = props.renderStep
    const RenderLabel = props.renderLabel
    const barThickeness = props.barThickeness
    const stepBorderWidth = props.stepBorderWidth
    const barColor = props.barColor;
    const labelTextStyle = props.labelTextStyle;
    const completedBarColor = props.completedBarColor;
    const activeStep = props.activeStep
    return (
        <View style={{ display: "flex" }}>
            {
                data.map((item, index) => {

                    const isLastIndex = index === data.length - 1;

                    const renderLabel = (item) => {
                        return (
                            <>
                            {
                             RenderLabel ? 
                             <RenderLabel item={item} index={index} labelTextStyle={labelTextStyle} />
                                : 
                                <Text style={labelTextStyle}>{item.label}</Text>
                            }
                            </>
                        )
                    }

                    const step = () => {
                        const style: StyleProp<ViewStyle> = {
                            width: stepWidth,
                            height: stepHeight,
                            marginBottom: barLength,
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center',
                        }
                        return (
                            <View style={style}>
                                {RenderStep ? RenderStep({ item, index }) :
                                    <Step
                                        width={stepWidth}
                                        height={stepHeight}
                                        stepBorderWidth={stepBorderWidth} />}
                            </View>
                        )
                    }

                    return (
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            {step()}
                            {!isLastIndex && <Bar
                                index={index}
                                activeStep={activeStep}
                                barLength={barLength}
                                barThickeness={barThickeness}
                                stepHeight={stepHeight}
                                stepWidth={stepWidth}
                                completedBarColor={completedBarColor}
                                barColor={barColor} />}
                                <View style={{height:stepWidth,justifyContent:'center'}}>
                                {renderLabel(item)}
                                </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export { VerticalStepProgressBar }