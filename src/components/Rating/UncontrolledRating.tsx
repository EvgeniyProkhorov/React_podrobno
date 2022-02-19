import React, {useState} from "react";
import {RatingValue} from "./Rating";

export type UncontrolledRatingType = {
    defaultValue?: RatingValue
    onChange?: (value: RatingValue) => void
}


export const UncontrolledRating: React.FC<UncontrolledRatingType> = ({defaultValue, onChange}) => {
    console.log("Rating rendered")

    let [value, setValue] = useState<RatingValue>(defaultValue ? defaultValue : 0)


    return (
        <div>
            <Star selected={value > 0} callBack={() => {
                setValue(1);
                if (onChange) {
                    onChange(1)
                }
            }}/>
            <Star selected={value > 1} callBack={() => {
                setValue(2);
                if (onChange) {
                    onChange(2)
                }
            }}/>
            <Star selected={value > 2} callBack={() => {
                setValue(3);
                if (onChange) {
                    onChange(3)
                }
            }}/>
            <Star selected={value > 3} callBack={() => {
                setValue(4);
                if (onChange) {
                    onChange(4)
                }
            }}/>
            <Star selected={value > 4} callBack={() => {
                setValue(5);
                if (onChange) {
                    onChange(5)
                }
            }}/>
        </div>
    )
}

type StartPropsType = {
    selected: boolean
    callBack: () => void
}

const StarMemo: React.FC<StartPropsType> = ({selected, callBack}) => {
    console.log("Star rendered")
    const onClickHandler = () => {
        callBack()
    }

    return <span onClick={onClickHandler}>
        {selected ? <b>★</b> : "☆"}
        {/*{props.selected && <b>★</b>}*/}
        {/*{!props.selected && <b>☆</b>}*/}
    </span>
}

const Star = React.memo(StarMemo)
