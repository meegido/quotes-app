import './App.css';
import React from 'react'

function App() {
  const [sentence, setSentence] = React.useState(' Aquí se ve lo que escribes')

  function handleChange(event) {
    event.preventDefault()
    setSentence(event.target.value)
  }

  return (
    <div className="App">
      <div>
        <h1>{sentence}</h1>
        <div>
          <p>#tags</p>
        </div>
        <div>
          <p>Tu nombre</p>
        </div>
      </div>
      <div>
        <form>
          <label htmlFor="sentence">Escribe tu idea</label>
          <input type="text"  id="sentence" onChange={handleChange}/>
        </form>
      </div>
    </div>
  );
}

export default App;
