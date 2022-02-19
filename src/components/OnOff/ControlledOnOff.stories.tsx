import React, {useState} from "react";
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {ControlledOnOff} from "./ControlledOnOff";

export default {
    title: 'ControlledOnOff',
    component: ControlledOnOff
} as ComponentMeta<typeof ControlledOnOff>

const callback = action('on or off was clicked')

export const ON = () => <ControlledOnOff onOff={true} onOffSwitcher={callback}/>
export const Off = () => <ControlledOnOff onOff={false} onOffSwitcher={callback}/>

export const Switcher = () => {
    const [switcher, setSwitcher] = useState<boolean>(false)
    return <ControlledOnOff onOff={switcher} onOffSwitcher={setSwitcher}/>
}