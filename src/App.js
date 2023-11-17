import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#212529'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }

  }
  return (
    <>
      <Router>
        <Navbar title="Simplify-Day" mode={mode} toggleMode={toggleMode} />
        <br /><br /><br />
     
          <Routes>
            <Route exact path="/About" element = {<About />} />
            <Route path="/" element = {<TextForm heading="Enter the Text to Convert" mode={mode} />} />
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
