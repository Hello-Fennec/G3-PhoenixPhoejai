
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import Home from "./pages/Home";
import NavbarDropdown from './components/NavBar/Navbar';
import Background1 from './components/1st-background.js';
import Background2 from './components/2nd-background.js';
import BlurGradient from './components/BlurGradient';
import Page4 from "./components/page4";
import Page3 from "./components/page3";
import Page6 from './components/page6';


function App() {
  return (
    <div>
      <>
      <BrowserRouter>
        <NavbarDropdown />
      </BrowserRouter>
    </>
     <Background1 />
     <BlurGradient />
     <Background2 />
     <Page3 />
      <Page4 />
      <Page6 />
    </div>
  );
}

export default App;
