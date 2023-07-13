import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
      jeje
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))