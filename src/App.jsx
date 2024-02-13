import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert ('button ckucjed')
  }

  return (
    <>
      <h1>React Core Concept 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() =>{alert('click me 2')}}>Click Me 2</button>
    </>
  )
}

export default App
