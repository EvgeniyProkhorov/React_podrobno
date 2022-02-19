import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValue} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Select} from "./components/Select/Select";


// Function declaration
function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValue>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onOff, setOnOff] = useState<boolean>(false)

    const changeRating = (value: RatingValue) => {
        setRatingValue(value)
    }
    const accordionSwitcher = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }
    const onOffSwitcher = (value: boolean) => {
        setOnOff(value)
    }


    // Полезное что то
    // обязана вернуть JSX
    return (
        <div className='parent'>
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<Accordion titleValue={'Users'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={accordionSwitcher} />*/}
            <UncontrolledRating/>
            <Rating value={ratingValue} changeRating={changeRating}/>
            <UncontrolledOnOff onChange={setOnOff}/> {onOff.toString()}
            {/*<ControlledOnOff onOff={onOff} onOffSwitcher={setOnOff}/>*/}
            <Select title={'Select Title'} items={[{title: "SPB", value: 1}, {title: "Belgorod", value: 2}, {title: "MSK", value: 3}]}/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//     console.log("PageTitle rendered")
//     return (
//         <h1>{props.title}</h1>
//     )
// }


export default App;
