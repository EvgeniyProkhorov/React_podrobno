import React, {useState} from "react";
import {ComponentMeta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
} as ComponentMeta<typeof UncontrolledAccordion>

const callback = action('accordion mode changed')

export const UncontrolledMode = () => <UncontrolledAccordion titleValue={'Menu'}/>

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(false)
//     return <Accordion titleValue={'Users'} collapsed={value} accordionSwitcher={() => setValue(!value)}/>
// }