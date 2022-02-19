import React, {useState, KeyboardEvent, useMemo} from "react";
import css from "./Select.module.css"

type ItemType = {
    title: string
    value: number
    countryID: number
    population: number
}

export type SelectType = {
    title: string
    items: Array<ItemType>
    valueOfItemClicked: (value: any) => void
}

export const Select1 = () => {
    console.log("Select1 Rendered")
    const [cities, setCities] = useState([
        {title: "Saint-Petersburg", value: 1, countryID: 1, population: 6000000},
        {title: "Belgorod", value: 2, countryID: 1, population: 2000000},
        {title: "Moscow", value: 3, countryID: 1, population: 15000000},
        {title: "Minsk", value: 4, countryID: 2, population: 7000000},
        {title: "Gomel", value: 5, countryID: 2, population: 4000000},
        {title: "Brest", value: 6, countryID: 2, population: 3000000}
    ])
    const [title, setTitle] = useState('Select With  Filtered Items')
    const [collapsed, setCollapsed] = useState(true)
    const [hover, setHover] = useState(1)

    // const hoveredItem = props.items.find(el => el.value)
    const onClickHandler = (title: string, id: number) => {
        setTitle(title)
        setCollapsed(true)
        // props.valueOfItemClicked(id)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp") {
            for (let i = 0; i <= cities.length; i++) {
                if (hover === i) {
                    if (hover) {
                        console.log(hover)
                        setHover(hover - 1)
                    }
                }
            }
        } else if (e.key === "ArrowDown") {
            for (let i = 0; i <= cities.length; i++) {
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

    const filteredArrByLetter = useMemo(() => {
        console.log('filteredArrByLetter RENDERED')
        return cities.filter(i => i.title.toLowerCase().indexOf("e") > 0)
    }, [cities])

    const filteredArrByCountry = useMemo(() => {
        console.log('filteredArrByCountry RENDERED')
        return cities.filter(i => i.countryID === 2)
    }, [cities])

    return (
        <>
            <div className={css.select} tabIndex={0} onKeyUp={onKeyPress}>
                <span className={css.main} onClick={() => setCollapsed(!collapsed)}>{title}</span>
                {!collapsed && <div className={css.options}> {cities.map(el => {
                    return <div className={`${hover === el.value ? css.selected : ''}`}
                                onMouseEnter={() => setHover(el.value)}
                                onClick={() => onClickHandler(el.title, el.value)}
                                key={el.value}>{el.title}</div>
                })} </div>}
            </div>
            <Select2 items={filteredArrByLetter}/>
            <Select3 items={filteredArrByCountry}/>
        </>
    )
}
type Select2Type = {
    items: Array<ItemType>
}

export const SelectSecret2 = (props: Select2Type) => {
    console.log("Select2 Rendered")

    const [cities, setCities] = useState(props.items)
    const [title, setTitle] = useState('Select With  Filtered Items')
    const [collapsed2, setCollapsed2] = useState(true)
    const [hover, setHover] = useState(1)

    // const hoveredItem = props.items.find(el => el.value)
    const onClickHandler2 = (title: string, id: number) => {
        setTitle(title)
        setCollapsed2(true)
        // props.valueOfItemClicked(id)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp") {
            for (let i = 0; i <= cities.length; i++) {
                if (hover === i) {
                    if (hover) {
                        console.log(hover)
                        setHover(hover - 1)
                    }
                }
            }
        } else if (e.key === "ArrowDown") {
            for (let i = 0; i <= cities.length; i++) {
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
            <div className={css.select2} tabIndex={0} onKeyUp={onKeyPress}>
                <span className={css.main} onClick={() => setCollapsed2(!collapsed2)}>{title}</span>
                {!collapsed2 && <div className={css.options}> {cities.map(el => {
                    return <div className={`${hover === el.value ? css.selected : ''}`}
                                onMouseEnter={() => setHover(el.value)}
                                onClick={() => onClickHandler2(el.title, el.value)}
                                key={el.value}>{el.title}</div>
                })} </div>}
            </div>
        </>
    )
}

const Select2 = React.memo(SelectSecret2)

type Select3Type = {
    items: Array<ItemType>
}

export const SelectSecret3 = (props: Select3Type) => {
    console.log("Select3 Rendered")

    const [cities, setCities] = useState(props.items)
    const [title, setTitle] = useState('Select With  Filtered Items')
    const [collapsed3, setCollapsed3] = useState(true)
    const [hover, setHover] = useState(1)

    // const hoveredItem = props.items.find(el => el.value)
    const onClickHandler3 = (title: string, id: number) => {
        setTitle(title)
        setCollapsed3(true)
        // props.valueOfItemClicked(id)
    }
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowUp") {
            for (let i = 0; i <= cities.length; i++) {
                if (hover === i) {
                    if (hover) {
                        console.log(hover)
                        setHover(hover - 1)
                    }
                }
            }
        } else if (e.key === "ArrowDown") {
            for (let i = 0; i <= cities.length; i++) {
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
            <div className={css.select3} tabIndex={0} onKeyUp={onKeyPress}>
                <span className={css.main} onClick={() => setCollapsed3(!collapsed3)}>{title}</span>
                {!collapsed3 && <div className={css.options}> {cities.map(el => {
                    return <div className={`${hover === el.value ? css.selected : ''}`}
                                onMouseEnter={() => setHover(el.value)}
                                onClick={() => onClickHandler3(el.title, el.value)}
                                key={el.value}>{el.title}</div>
                })} </div>}
            </div>


        </>
    )
}
const Select3 = React.memo(SelectSecret3)


