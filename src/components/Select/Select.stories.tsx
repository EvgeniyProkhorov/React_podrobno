import React from "react";
import {Story} from "@storybook/react";

import {Select, SelectType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Components/Select",
    component: Select
}

const valueOfItemClicked = action('Value of item')

const Template: Story<SelectType> = (args: SelectType)=> <Select {...args}/>

export const EmptySelect = Template.bind({})
EmptySelect.args = {
    title: 'Empty Select',
    items: []
}
export const SelectWithItems = Template.bind({})
SelectWithItems.args = {
    title: 'Select With Items',
    items: [{title: "SPB", value: 1}, {title: "Belgorod", value: 2}, {title: "MSK", value: 3}],
    valueOfItemClicked
}

