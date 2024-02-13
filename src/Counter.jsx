import { useState } from "react"

export default function Counter (){

    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const btnStyle = {
        border: '2px solid black',
        padding: '5px',
        margin: '10px',
        color: 'blue'
    }
    const handlReduce = () =>{
        if(count > 0){
            const newCount = count - 1;
            setCount(newCount)
        }
    }

    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button style={btnStyle} onClick={handleAdd}>Add</button>
            <button style={btnStyle} onClick={handlReduce}>Reduce</button>
        </div>
    )
}