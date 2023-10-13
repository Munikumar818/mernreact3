import { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  
  const[clicked,setClicked]=useState(false);
  
  function changeclick(){
    clicked?setClicked(false):setClicked(true);
    console.log(clicked);
  }
  const colors=['FF0303','FF7903','FFD903','A7FF03','2FFF01','01FFB6','01BEFF','0171FF','0D01FF','AA01FF','F301FF','FF01CD','FF015A','FF0169']
  return (
    <div className="App">
    <button onClick={changeclick} className='btn'>Color Picker</button>
    {
      clicked?<ColorPicker colors={colors} />:''
    }
    </div>
  );
}

export default App;
