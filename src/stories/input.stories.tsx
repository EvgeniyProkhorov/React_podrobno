import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Simulate} from "react-dom/test-utils";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return (
        <><input onChange={onChange}/> - {value}</>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <><input ref={inputRef}/>
            <button onClick={save}>save</button>
            - actual value: {value}</>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    return <input type={"checkbox"} checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    return <select value={parentValue} onChange={(e)=>setParentValue(e.currentTarget.value)}>
        <option>none</option>
        <option value={'1'}>Spb</option>
        <option value={'2'}>Belgorod</option>
        <option value={'3'}>Msk</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={123}/>
