import React from "react";
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
} as ComponentMeta<typeof UncontrolledOnOff>

const callback = action('on or off was clicked')

export const On = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const Off = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div> Unsync when change defaultValue when already rendered</div>

