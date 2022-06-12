import React,{useState} from 'react'
import Auth from './Components/Auth'
import Navbar from './Components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Jobs from './Components/Jobs';
import Companies from './Components/Companies';
import Services from './Components/Services';
import Resources from './Components/Resources';

function App() {
const [mode, setMode] = useState('light'); //whether dark mode is enables or not

const toggleMode = () =>{
  if (mode === 'light') {
    setMode('dark');
    // document.body.style.backgroundColor = '#212529'
  } else{
    setMode('light');
    // document.body.style.backgroundColor = 'white'

  }
}

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
        <Route path = '/' element={<Home/>} mode = {mode}/>
        <Route path = '/jobs' element={<Jobs/>}/>
        <Route path = '/companies' element={<Companies/>}/>
        <Route path = '/services' element={<Services/>}/>
        <Route path = '/resources' element={<Resources/>}/>
        <Route path = '/auth' element={<Auth/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App