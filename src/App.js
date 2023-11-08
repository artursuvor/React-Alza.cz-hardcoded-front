import React, { useState, useEffect } from 'react'
import Digit from "./Digit"
import {nanoid} from "nanoid"

function App() {
  
  const [digits, setDigits] = useState([])
  const [userInput, setUserInput] = useState('')
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    if (isNaN(userInput)){
      setDigits([])
    }
  }, [userInput])

  function generateDigits(){
      const newDigit = []

      for (let i = 0; i < userInput; i++) {
          newDigit.push(Math.ceil(Math.random() * 9999))
      }
      setDigits(newDigit)
      const randomIndex = Math.floor(Math.random() * userInput);
      setAnswer(newDigit[randomIndex])
  }
  

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
        window.location.reload()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="App">

      <div className="text-above">
        <h1>Find Number</h1>
        {answer && <p>You are supposed to find {answer} number in the list. Good luck!</p>}
      </div>

      <button className="roll-dice" onClick={generateDigits}>Reroll</button>
      <input 
        className="digitsCount" 
        placeholder="How many digits you want?"
        value={userInput}
        onChange={(e) => {
          const value = e.target.value;
          if (!isNaN(value)) {
            setUserInput(value)
          } else {
            setUserInput('')
            alert("Use only numbers!") 
          }
        }}
      />

      <div className="digits-container">
        {digitsElements}
      </div>
    </div>
  )
}

export default App
