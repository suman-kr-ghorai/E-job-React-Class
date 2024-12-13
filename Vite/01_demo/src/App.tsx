import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Table from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <h3>Count is:{count}</h3>
      <button className="btn btn-success" onClick={()=>setCount(count+1)}>ADD</button>
      <button  className="btn btn-primary" onClick={()=>setCount(count-1)}>SUB</button>
      <Content/>
      <Table/>
      <Footer/>
     
    </>
  )
}

export default App
