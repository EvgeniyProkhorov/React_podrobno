import React from "react";
import style from './AnalogClockView.module.css'
import {ClockProps} from "./Clock";

export const AnalogClockView: React.FC<ClockProps> = ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return <div className={style.clock}>
        <div className={style.analogClock}>
            <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
            <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
            <div className={`${style.dial} ${style.hours}`} style={hoursStyle} />

            <div>TEST</div>
        </div>
    </div>
}