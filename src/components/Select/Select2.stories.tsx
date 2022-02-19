import React from "react";
import {Story} from "@storybook/react";

import {Select1, SelectType} from "./Select2";
import {action} from "@storybook/addon-actions";

export default {
    title: "Components/Select with Memo",
    component: Select1
}

const valueOfItemClicked = action('Value of item')

const Template: Story<SelectType> = (args: SelectType) => <Select1 />

export const SelectWithFilteredItems = Template.bind({})
SelectWithFilteredItems.args = {
    title: 'Select With  Filtered Items',
    items: [
        {title: "Saint-Petersburg", value: 1, countryID: 1, population: 6000000},
        {title: "Belgorod", value: 2, countryID: 1, population: 2000000},
        {title: "Moscow", value: 3, countryID: 1, population: 15000000},
        {title: "Minsk", value: 4, countryID: 2, population: 7000000},
        {title: "Gomel", value: 5, countryID: 2, population: 4000000},
        {title: "Brest", value: 6, countryID: 2, population: 3000000}
    ],
    valueOfItemClicked
}
