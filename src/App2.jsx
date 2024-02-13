import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'

function App() {
  // const [count, setCount] = useState(0)
  const actors = ['Apel', 'Bel', 'Komola', 'Dalim'];

  const singers = [
   {id:1, name: 'Mahfuj', age: 68,},
    {id: 2, name: 'Eva Rahman', age: 58},
    {id: 3, name: 'Shuvro Dev', age: 49}
  ]

  return (
    <>
      {/*       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>



      {/*     <Todo
        task="Learn React"
        isDone={true}></Todo>
      <Todo
        task="Learn JSX"
        isDone={false}></Todo>
      <Todo
        task="Core Concept"
        isDone={true}></Todo> */}



      {/*       <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


      {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
    {/* <Singers></Singers> */}

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

    </>
  )
}

export default App
