import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import Home from "./pages/Home";
import NavbarDropdown from './components/NavBar/Navbar';
import Background1 from './components/1st-background.js';
import Background2 from './components/2nd-background.js';
import BlurGradient from './components/BlurGradient';



function App() {
  return (
    <div className='contaiiner'>
      <>
      <BrowserRouter>
        <NavbarDropdown />
      </BrowserRouter>
    </>
     <Background1 />
     <BlurGradient />
     <Background2 />
    </div>
  );
}

export default App;
