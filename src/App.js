import React, { useState, useEffect } from 'react'
import Digit from "./Digit"
import {nanoid} from "nanoid"

function App() {
  
  const [digits, setDigits] = useState([])

  function generateDigits(){
      const newDigit = []
      let answer = 0
      for (let i = 0; i < 10; i++) {
          newDigit.push(Math.ceil(Math.random() * 9999))
      }
      return setDigits(newDigit)
  }

  const answer = digits[Math.floor(Math.random() * 10)]

  const [userAnswer, setUserAnswer] = useState(answer)

  const digitsElements = digits.map(digit => 
    <Digit 
      key = {nanoid()} 
      value = {digit} 
      answer = {answer}
    />)





  const [isCheaterDetected, setIsCheaterDetected] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === 'f' || event.key === 'а')) {
        setIsCheaterDetected(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      {isCheaterDetected && (
        <div className="warning-message">
          <p>You are trying to use search. This is cheating!</p>
        </div>
      )}
      <div className="text-above">
        <h1>Find Number</h1>
        <p>You are supposed to find this {answer} number in the list. Good luck!</p>
      </div>

      <button className="roll-dice" onClick={generateDigits}>Reroll</button>

      <div className="digits-container">
        {digitsElements}
      </div>
    </div>
  );
}

export default App;
