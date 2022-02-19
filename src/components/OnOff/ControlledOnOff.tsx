import React from "react";
// import s from './UncontrolledOnOff.module.css'


export type ControlledOnOffProps = {
    onOff: boolean
    onOffSwitcher: (value: boolean) => void
}

export const ControlledOnOff: React.FC<ControlledOnOffProps> =
    ({onOff, onOffSwitcher}) => {

        let onStyle = {
            backgroundColor: onOff ? "green" : "white"
        }
        let offStyle = {
            backgroundColor: onOff ? "white" : "red"
        }
        let indicatorStyle = {
            display: "inline-block",
            width: "10px",
            height: "10px",
            borderRadius: "10px",
            border: "1px solid black",
            margin: "5px",
            backgroundColor: onOff ? "green" : "red"
        }

        return (
            <div>
                <button style={onStyle} onClick={() => onOffSwitcher(true)}>On</button>
                <button style={offStyle} onClick={() => onOffSwitcher(false)}>Off</button>
                <div style={indicatorStyle}> </div>
            </div>
        )
    }