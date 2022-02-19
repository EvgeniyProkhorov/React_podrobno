import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempVariable = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempVariable *= i
        }
        return tempVariable

    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users Rendered")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo Rendered')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Evgen", "Valera", "Artem", "Sanya"])

    const newUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > 0)
    }, [users])

    const addUsers = () => {
        setUsers([...users, "Sveta" + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>Add User</button>

        {counter}
        <Users users={newUsers}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback Rendered')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    // const newBooks = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf('a') > 0)
    // }, [books])

    // const addBook = () => {
    //     console.log(books)
    //     setBooks([...books, "Angular" + new Date().getTime()])
    // }

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            setBooks([...books, "Angular" + new Date().getTime()])
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            setBooks([...books, "Angular" + new Date().getTime()])
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}

type BooksType = {
    books?: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksType) => {
    console.log("BooksSecret Rendered")
    return <div>
        <button onClick={props.addBook}>Add book</button>
        {props.books &&
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }</div>
}

const Books = React.memo(BooksSecret)