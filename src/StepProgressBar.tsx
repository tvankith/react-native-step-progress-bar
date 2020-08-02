
import React from 'react';
import { VerticalStepProgressBar } from 'react-native-step-progress-bar/src/VerticalStepProgressBar';
import { HorizondalStepProgressBar } from 'react-native-step-progress-bar/src/HorizondalStepProgressBar';
import { StepProgressBarProps } from 'react-native-step-progress-bar/src/types';

const StepProgressBar = (props:StepProgressBarProps)=>{
    const orientation = props.orientation
    return (
        orientation === "horizondal" ? <HorizondalStepProgressBar {...props}/> : <VerticalStepProgressBar {...props}/>
    )
}

export { StepProgressBar }