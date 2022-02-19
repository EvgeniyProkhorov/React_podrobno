import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements
     * that are
     * showed when accordion is opened(not collapsed)
     */
    items: ItemType[]
    /**
     * Callback that is called when any item will be clicked
     * @param value is value of clicked item
     */
    onClick: (value: any) => void
    /**
     * Optional color of header text
     */
    color: string
}


export const Accordion: React.FC<AccordionPropsType> = ({color, items, onClick, titleValue, collapsed, onChange}) => {
    console.log("Accordion rendered")
    return (
        <div>
            <AccordionTitle title={titleValue} color={color}
                            callBack={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
    color?: string
}

const AccordionTitleMemo: React.FC<AccordionTitlePropsType> = ({title, callBack, ...props}) => {
    console.log("AccordionTitle rendered")
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={callBack}>{title}</h3>
    )
}
const AccordionTitle = React.memo(AccordionTitleMemo)


type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodyMemo(props: AccordionBodyType) {
    console.log("AccordionBody rendered")
    return (
        <ul>
            {props.items.map((m, i) => {
                return <li onClick={() => props.onClick(m.value)} key={i}>{m.title}</li>
            })}
        </ul>
    )
}
const AccordionBody = React.memo(AccordionBodyMemo)


