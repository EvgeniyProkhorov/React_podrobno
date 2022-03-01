import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

// export const SimpleExample1 = () => {
//     const [fake, setFake] = useState(0)
//     const [counter, setCounter] = useState(0)
//     console.log('SimpleExample rendered')
//
//     useEffect(()=>{
//         console.log('useEffect every render')
//         document.title = counter.toString()
//     })
//     useEffect(()=>{
//         console.log('useEffect only first render (componentDidMount)')
//         document.title = counter.toString()
//     }, [])
//     useEffect(()=>{
//         console.log('useEffect first render and every counter change')
//         document.title = counter.toString()
//     }, [counter])
//
//     return <>
//         <button onClick={()=> setFake(fake +1)}>+</button>
//         {counter} {fake}
//     </>
// }

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    console.log('SetTimeoutExample rendered')
    const time = new Date()


    // useEffect(() => {
    //     setTimeout(() => {
    //         debugger
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])
    useEffect(() => {
        setInterval(() => {
            // console.log('1 sec...')
            // setCounter((prevState => prevState + 1))
        }, 1000)
    }, [])

    return <>
        {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <div>
            {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
        </div>
    </>
}