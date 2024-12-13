import { useState } from 'react'
import './App.css'
import Useeff from './Useeff'
import Users from './assets/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Useeff/> */}
      <Users/>
    </>
  )
}

export default App
