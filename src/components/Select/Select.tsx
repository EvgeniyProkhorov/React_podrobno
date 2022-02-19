import React, {useState, KeyboardEvent} from "react";
import css from "./Select.module.css"

type ItemType = {
    title: string
    value: number
}

export type SelectType = {
    title: string
    items: Array<ItemType>
    valueOfItemClicked: (value: any) => void
}

export const Select = (props: SelectType) => {
    const [title, setTitle] = useState(props.title)
    const [collapsed, setCollapsed] = useState(true)
    const [hover, setHover] = useState(1)

    // const hoveredItem = props.items.find(el => el.value)
    const onClickHandler = (title: string, id: number) => {
        setTitle(title)
        setCollapsed(true)
        props.valueOfItemClicked(id)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp") {
            for (let i = 0; i <= props.items.length; i++) {
                if (hover === i) {
                    if (hover) {
                        console.log(hover)
                        setHover(hover - 1)
                    }
                }
            }
        } else if (e.key === "ArrowDown") {
            for (let i = 0; i <= props.items.length; i++) {
                if (hover === i) {
                    if (hover) {
                        console.log(hover)
                        setHover(hover + 1)
                    }
                }
            }
        }
        console.log(hover)
    }

    return (
        <>
            <div className={css.select} tabIndex={0} onKeyUp={onKeyPress}>
                <span className={css.main} onClick={() => setCollapsed(!collapsed)}>{title}</span>
                {!collapsed && <div className={css.options}> {props.items.map(el => {
                    return <div className={`${hover === el.value ? css.selected : ''}`}
                                onMouseEnter={() => setHover(el.value)}
                                onClick={() => onClickHandler(el.title, el.value)}
                                key={el.value}>{el.title}</div>
                })} </div>}
            </div>
        </>
    )
}