import React, { useState } from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);


  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const StarCount = () => {
    return Array.from({ length: counter }, () => <img style={{ width: '25px', height: '25px', marginRight: '10px' }} src='./Images/goldStar.jpeg'></img>)
  };


  return (
    <div>
      <button onClick={decrease}>
        Decrease
      </button>

      <label>{counter}</label>

      <button onClick={(increase)}>
        Increase
      </button>

      <div>
        <StarCount />
      </div>



    </div>
  );
}

export default App;
