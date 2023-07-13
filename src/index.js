import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter+1)

  const setZero = () => setCounter(0)

  const increaseBy2 = () => setCounter(counter+2)

  return (
    <div>
      <Display counter={counter}/>

      <Button 
      handleClick={increaseByOne}
      text='+1'
      />

      <Button 
      handleClick={increaseBy2}
      text='+2'
      />

      <Button 
      handleClick={setZero}
      text='0'
      />
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

ReactDOM.render(<App />, document.getElementById('root'))