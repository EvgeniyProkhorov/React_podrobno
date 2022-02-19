import React, {useState} from "react";
// import s from './UncontrolledOnOff.module.css'

type SwitchInfo = {
    onChange: (value: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff: React.FC<SwitchInfo> = ({onChange, defaultOn}) => {

    let [on, setOn] = useState(defaultOn ? defaultOn : false)

    const onClicked = () => {
        setOn(true)
        onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        onChange(false)
    }

    let onStyle = {
        backgroundColor: on ? "green" : "white"
    }
    let offStyle = {
        backgroundColor: on ? "white" : "red"
    }
    let indicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid black",
        margin: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>On</button>
            <button style={offStyle} onClick={offClicked}>Off</button>
            <div style={indicatorStyle}> </div>
        </div>
    )
}