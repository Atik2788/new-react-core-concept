import { useEffect, useState } from "react"
import './Friends.css'
import Friend from "./Friend"

export default function Friends () {
    const [friends, setFriends] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className="box">
            <h2>Friends...</h2>
            <h2 className="d-grid">
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
            </h2>
        </div>
    )
}