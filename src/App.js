
import NavBar from './Components/NavBar';
import "./App.css";
import WhatsOn from "./Components/WhatsOn";

import { useState } from 'react';


function App() {


  return (
    <div className="App">
     <header>
      <h1>Classic Cinema Company</h1>
      <NavBar/>
     </header>
      
      <WhatsOn />
    </div>
  );
}

export default App;
