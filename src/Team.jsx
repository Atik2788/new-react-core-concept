import { useState } from "react"

export default function Team () {

    const [team, setTeam] = useState(11)

    const handleAdd = () => {
       const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleRemove = () => {
        if(team > 11){
            // const newTeam = team - 1;
            setTeam(team - 1)
        }
    }


    const teamStyle = {
        border: '2px solid green', 
        margin: '10px', 
        borderRadius: '10px'
    }
    const btnStyle = {
        border: '2px solid green',
        backgroundColor: 'lightBlue',
        padding: '5px',
        margin: '10px',
        color: 'black'
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button style={btnStyle} onClick={handleAdd}>Add</button>
            <button style={btnStyle} onClick={handleRemove}>Remove</button>
        </div>
    )
}