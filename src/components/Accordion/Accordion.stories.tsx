import React, {useState} from "react";
import {ComponentMeta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
}

const callback = action('accordion mode changed even fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'User',
    collapsed: false,
    items: [{title: 'Evgen', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}]
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: 'Users',
    items: [{title: 'Evgen', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Viktor', value: 4}],
    onClick: onClickCallback
}


// export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} accordionSwitcher={callback}/>

// export const UserUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} accordionSwitcher={callback}/>
