import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Services/>}/>
        <Route path='/' element={<About/>}/>
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
