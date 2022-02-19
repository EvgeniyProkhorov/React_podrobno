import React, {useState} from "react";
import  {ComponentMeta} from "@storybook/react";
import {Rating, RatingPropsType, RatingValue} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
} as ComponentMeta<typeof Rating>

export const EmptyStars = (args:RatingPropsType) => <Rating {...args}/>
export const Rating1 = () => <Rating value={1} changeRating={x=>x}/>
export const Rating2 = () => <Rating value={2} changeRating={x=>x}/>
export const Rating3 = () => <Rating value={3} changeRating={x=>x}/>
export const Rating4 = () => <Rating value={4} changeRating={x=>x}/>
export const Rating5 = () => <Rating value={5} changeRating={x=>x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValue>(1)
    return <Rating value={rating} changeRating={setRating}/>
}