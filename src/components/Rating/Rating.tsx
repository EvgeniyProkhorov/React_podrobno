import React from "react";

export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValue
    changeRating: (value: RatingValue) => void
}

export const Rating: React.FC<RatingPropsType> = ({value, changeRating}) => {
    console.log("Rating rendered")
    return (
        <div>
            <Star selected={value > 0} callBack={() => changeRating(1)}/>
            <Star selected={value > 1} callBack={() => changeRating(2)}/>
            <Star selected={value > 2} callBack={() => changeRating(3)}/>
            <Star selected={value > 3} callBack={() => changeRating(4)}/>
            <Star selected={value > 4} callBack={() => changeRating(5)}/>
        </div>
    )
}

export type StartPropsType = {
    selected: boolean
    callBack: () => void
}

export const StarMemo: React.FC<StartPropsType> = ({selected, callBack}) => {
    console.log("Star rendered")

    return <span onClick={callBack}>{selected ? <b>star</b> : "star"} </span>
}
const Star = React.memo(StarMemo)

// function Star(props: StartPropsType) {
//     console.log("Star rendered")
//
//     if (props.selected) {
//         return <span><b>star</b></span>
//     } else {
//         return <span>star</span>
//     }
// }