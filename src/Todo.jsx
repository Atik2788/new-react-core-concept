/* export default function Todo ({task, isDone}) {
    return(
        <li>{task}</li>
    )
}
 */


/* export default function Todo ({task, isDone}) {
    if(isDone === true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work on: {task}</li>
    }
} */


/* export default function Todo ({task, isDone}) {
    return (
        <li> {isDone ? 'Finished' : 'Work on'} {task}</li>
    )
} */



/* export default function Todo ({task, isDone}) {
    return (
        <li> {task} {isDone && ": Done"}</li>
    )
} */



/* export default function Todo ({task, isDone}) {
    return (
        <li> {task} {isDone || ": Not Done"}</li>
    )
} */



export default function Todo ({task, isDone}) {
    return (
        <li> {task} {isDone && ": Done" || ": Not Done"}</li>
    )
}