import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {Navbar} from  "./components/navbar";
import {Hero} from  "./components/Hero";
import {About} from  "./components/About";
import {Footer} from  "./components/Footer";
import {Projects} from  "./components/Projects";
import {Contact} from  "./components/Contact";


import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Hero/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  
    
  );
}
export default App;