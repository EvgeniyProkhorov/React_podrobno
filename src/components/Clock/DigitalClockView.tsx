import React from "react";
import {ClockProps, time2DigitsForm} from "./Clock";

export const DigitalClockView: React.FC<ClockProps> = ({date}) => {
    return <> <span>{time2DigitsForm(date.getHours())}</span>
        :
        <span>{time2DigitsForm(date.getMinutes())}</span>
        :
        <span>{time2DigitsForm(date.getSeconds())}</span>
    </>
}