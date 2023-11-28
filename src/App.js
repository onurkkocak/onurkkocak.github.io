import Form from './components/Form';
import Info from './components/Info';
import React from 'react';
import './App.css';
import { useState } from 'react';




function App() {
  const [info,setInfo] = useState([])
  const [state, setState] = useState(false)
    return (
   <>
   
    <Form info ={info} setInfo={setInfo} setState={setState}/>
    <Info info ={info} setInfo={setInfo} state={state} />
 
   </>
  
  );
}

export default App;
