import React, {useReducer} from "react";

export type AccordionPropsType = {
    titleValue: string
}

export type ActionType = {
    type: "TOGGLE-COLLAPSED"
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }


}

export const UncontrolledAccordion: React.FC<AccordionPropsType> = ({titleValue}) => {
    // const [collapsed, setCollapsed] = useState(true)
    const [collapsed, dispatch] = useReducer(reducer, {collapsed: true})

    const collapseHandler = () => {
        dispatch({type: "TOGGLE-COLLAPSED"})
    }

    return (
        <div>
            <AccordionTitle title={titleValue} callBack={collapseHandler}/>
            {!collapsed.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

const AccordionTitleMemo: React.FC<AccordionTitlePropsType> = ({title, callBack}) => {
    console.log("AccordionTitle rendered")
    return (
        <h3 onClick={callBack}>{title}</h3>
    )
}
const AccordionTitle = React.memo(AccordionTitleMemo)

function AccordionBody() {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
