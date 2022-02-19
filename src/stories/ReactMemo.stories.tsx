import React, {useState} from 'react'

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users Rendered")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Evgen", "Valera", "Artem"])

    const addUsers = () => {
        setUsers([...users, "New Name" + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>Add User</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}