import React, {useState} from "react";

export default {
    title: 'useState'
}

export const Example1 = () => {
    console.log('Example rendered')
    const [counter, setCounter] = useState(0)

    return <>
        <button onClick={()=> setCounter(counter +1)}>+</button>
        {counter}
    </>
}