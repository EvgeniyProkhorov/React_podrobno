import React, {useEffect, useState} from 'react'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const time2DigitsForm = (number: number) => number < 10 ? `0${number}` : number


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockProps = {
    date: Date
}

